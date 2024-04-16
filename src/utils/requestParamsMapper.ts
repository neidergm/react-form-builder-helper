import { WithRequestConfig } from '../interfaces/fields.interface'
import { I_JsonObject } from '../interfaces/generic.interfaces';

const requestParamsMapper = (requestObjet: WithRequestConfig["request"], values: I_JsonObject) => {

    let { params } = requestObjet;

    if (!params) return requestObjet;

    // let paramPrefix = dependsOn.replace(/(.+\.)*\w+$/, "$1");
    if (typeof params === "string") {
        params = params.replace(/\{([\w]+)\}/g, (_, param) => {
            const val = values[param];
            return (val !== null && val !== undefined) ? val : _;
        })
    } else {
        params = Object.keys(params).reduce((p, c) => {
            if (p[c] === null) {
                return { ...p, [c]: values[c] }
            }
            return p
        }, { ...params })
    }

    return {
        ...requestObjet,
        params
    }
}

export default requestParamsMapper;
