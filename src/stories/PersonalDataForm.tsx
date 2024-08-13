import { useCallback, useEffect, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import { PEOPLE_DATA_BY_DNI, SAVE_PERSON_DATA, UPDATE_PEOPLE_DATA } from '../api/endPoints';
import { I_JsonObject } from '../interfaces/generic.interfaces';
import { FieldTypes } from '../interfaces/fields.interface';
import Field, { getFieldDefaultValues } from '..';


let initialValues: I_JsonObject = {}

const EPS = "https://axis.uninunez.edu.co/apiuninsc/eps";
const DOCUMENT_TYPE = "https://axis.uninunez.edu.co/apiuninsc/tipdoc";
const ETNIAS = "https://axis.uninunez.edu.co/apiuninsc/etnias";
const ESTRATO = "https://axis.uninunez.edu.co/apiuninsc/estratos";
const ROAD = "https://axis.uninunez.edu.co/apiuninsc/vias";
const CIVIL_STATUS = "https://axis.uninunez.edu.co/apiuninsc/civil";
const NEIGHBORHOOD = "https://axis.uninunez.edu.co/apiuninsc/barrio/";
const SCHOOLS = "https://axis.uninunez.edu.co/apiuninsc/colegio/buscar/";
const COUNTRIES = "https://axis.uninunez.edu.co/apiuninsc/paises";
const DEPARTMENTS = "https://axis.uninunez.edu.co/apiuninsc/paises/provincias";
const MUNICIPIOS = "https://axis.uninunez.edu.co/apiuninsc/paises/municipios/";


const personalData: FieldTypes[] = [
    {
        tag: "input",
        type: "text",
        name: "dniprs",
        label: "Número de identificación",
        validations: { required: true, minLength: 6, maxLength: 32, pattern: /^[a-z0-9]+$/i }
    },
    {
        tag: "select",
        type: "simple",
        name: "tipdcmide",
        label: "Tipo de identificación",
        options: [],
        request: {
            url: DOCUMENT_TYPE,
            method: "GET"
        },
        doRequest(url, method, data) {
            return fetch(url).then(r => r.json()).then((r: any) => {
                return { options: r.data.map((i: any) => ({ label: `${i.desd1} - ${i.cod_tipdoc}`, value: i.codalf })) }
            })
        },
        validations: { required: true }
    },
    {
        tag: "input",
        type: "text",
        name: "nomprs",
        label: "Nombres",
        validations: { required: true, minLength: 3 }
    },
    {
        tag: "input",
        type: "text",
        name: "ll1prs",
        label: "Primer apellido",
        validations: { required: true, minLength: 3 }
    },
    {
        tag: "input",
        type: "text",
        name: "ll2prs",
        label: "Segundo apellido",
        validations: { minLength: 3 }
    },
    {
        tag: "select",
        type: "simple",
        name: "nacionalidad",
        label: "Nacionalidad",
        defaultValue: "170",
        options: null,
        request: {
            url: COUNTRIES,
            method: "GET"
        },
        doRequest(url, method, data) {
            return fetch(url).then(r => r.json()).then((r:any) => {
                return { options: r.data.map((i:any) => ({ label: i.nombre_pais, value: i.cod_pais })) }
            })
        },
        validations: { required: true }
    },
    {
        tag: "date",
        type: "date",
        name: "datnai",
        label: "Fecha de nacimiento",
        validations: {
            required: true,
            max: { value: "last 5 years", message: "No debe ser mayor a ${value}" },
            min: { value: "last 100 years", message: "No debe ser menor a ${value}" }
        }
    },
    {
        tag: "select",
        type: "simple",
        name: "pai_codalfnai",
        defaultValue: "170",
        label: "País de nacimiento",
        validations: { required: true },
        options: null,
        request: {
            url: COUNTRIES,
            method: "GET"
        },
        doRequest(url, method, data) {
            return fetch(url).then(r => r.json()).then((r: any) => {
                return { options: r.data.map((i:any) => ({ label: i.nombre_pais, value: i.cod_pais })) }
            })
        },
    },
    {
        tag: "select",
        type: "simple",
        name: "prv_codnumnai",
        label: "Departamento de nacimiento",
        validations: { required: true },
        dependsOn: [{
            // name: "pai_codalfnai", show: true, whenValue: "170"
            name: "pai_codalfnai"
        }],
        options: null,
        request: {
            url: DEPARTMENTS,
            method: "GET"
        },
        doRequest(url, method, data) {
            return fetch(url).then(r => r.json()).then((r:any) => {
                return { options: r.data.map((i:any) => ({ label: i.nombre, value: i.cod_provincia })) }
            })
        },
    },
    {
        tag: "select",
        type: "simple",
        name: "mun_codnumnai",
        label: "Municipio de nacimiento",
        validations: { required: true },
        options: [],
        dependsOn: "prv_codnumnai",
        // dependsOn: [
        //     {
        //         name: "pai_codalfnai", show: true, whenValue: "170", 
        //     },
        //     {
        //         name: "prv_codnumnai", show: true, whenValue: "*"
        //     }
        // ],
        // dependsOn: [
        //     {
        //         name: "pai_codalfnai", show: true, whenValue: "170", props: { value: "0" }
        //     },
        //     {
        //         name: "prv_codnumnai", show: true, whenValue: "*"
        //     }
        // ],
        request: {
            url: MUNICIPIOS,
            params: "{prv_codnumnai}",
            method: "GET"
        },
        doRequest(url, method, data) {
            console.log(url, data)

            return fetch(url + data).then(r => r.json()).then((r:any) => {
                return { options: r.data.map((i:any) => ({ label: i.desc_municipio, value: i.cod_municipio })) }
            })
        },
    },
    {
        tag: "input",
        type: "radio",
        name: "sexprs",
        wrapperClassName: "col-md-12 col-xl-12",
        label: "Sexo biológico",
        options: [{ label: "Masculino", value: "H" }, { label: "Femenino", value: "M" }],
        validations: { required: true },
        inline: true
    },
    {
        tag: "custom",
        type: "PhoneInput",
        Element: (props)=>{ return <div>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div> },
        name: "tlfprs",
        label: "Teléfono",
        componentProps: ({ onChange, onBlur, value, ref, className, ...props }) => {
            return {
                onChange,
                onBlur,
                value: value || "",
                inputProps: {
                    ref,
                    name: props.name,
                    id: props.id,
                },
                inputClass: className,
                specialLabel: "",
                country: "co",
                preferredCountries: ["co"],
            }
        },
        // eslint-disable-next-line no-useless-escape
        validations: { required: true },
        controlled: true
    },
    {
        tag: "input",
        type: "email",
        name: "email",
        label: "Correo electrónico",
        validations: { required: true }
    },
    {
        tag: "checkbox",
        type: "simple",
        name: "terms",
        wrapperClassName: "col-md-12 col-xl-12",
        label: <span>Acepto el uso y tratamiento de mis datos de acuerdo a la </span>,
        validations: { required: true }
    }
]






export const PersonalDataForm = ({
    id = "test",
}) => {

    const form = useForm<FieldValues>({
        shouldUnregister: true,
        defaultValues: getFieldDefaultValues(personalData)
    });

    const {
        handleSubmit,
        getValues,
        reset,
        formState: { errors }
    } = form;

    const [formFields, setForm] = useState(personalData);

    const isAnUpdate = useRef(false);

    const submit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
    }

    const clearForm = (keepData: I_JsonObject = {}) => reset(formFields.reduce((p:any, c:any) => ({ ...p, [c.name]: keepData[c.name] || "" }), {}));

    const fetchValues = useCallback((dniprs: string) => {
        const doRequest = !!dniprs && initialValues.dniprs !== dniprs
        initialValues.dniprs = dniprs;

        if (doRequest) {
            clearForm(initialValues)

            personalData[1].disabled = true;
// setTimeout(()=>{
    if (dniprs) {
        fetch("https://axis.uninunez.edu.co/apiuninsc/personas/" + dniprs).then(r => r.json())
            .then(r => {
                if (r.data) {
                    r.data.prv_codnumnai = String(r.data.prv_codnumnai);
                    r.data.mun_codnumnai = String(r.data.mun_codnumnai);
                    isAnUpdate.current = true;
                    console.log(initialValues, r.data)
                    reset({ ...initialValues, ...(r.data || {}) })
                } else {
                    isAnUpdate.current = false;
                    if (personalData[1].disabled) personalData[1].disabled = false;
                }

                setForm([...personalData])
            })
    } else {
        if (personalData[1].disabled) {
            personalData[1].disabled = false;
        }
    }
// }, 1000)

        }
    }, [initialValues.dniprs])

    useEffect(() => {
        personalData[0].onBlur = ({ currentTarget }) => { fetchValues(currentTarget.value) }
        setForm([...personalData])

        initialValues = { ...getValues() };
        // reset(perData)
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(submit)} id={id}>
                <div className="row">
                    {
                        formFields.map((field, i) => {
                            return <Field
                                form={form}
                                key={i}
                                // Wrapper={FormGroup}
                                wrapperProps={{
                                    className: "col-md-6 col-lg-12 col-xl-6"
                                }}
                                // FieldComponent={fieldRelation(field.tag)}
                                // Label={Label}
                                field={field}
                                error={errors[field.name]}
                            />
                        })
                    }
                </div>
                <button className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </>
    )
}
