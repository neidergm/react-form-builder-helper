import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectWithRequestComponent } from '../MyOwnFormMaker';
import { I_JsonObject } from '../interfaces/generic.interfaces';

const meta = {
    ...commonConfiguration,
    title: 'Form/Select',
    component: SelectWithRequestComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectWithRequestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithRequest: Story = {
    args: {
        label: "Select component",
        tag: "select",
        name: "selectFieldWithRequest",
        type: "simple",
        placeholder: "Pick one...",
        options: [],
        // defaultValue: "008",
        validations: {
            required: true
        },
        doRequest(url, method, params) {
            return fetch(url).then((response) => response.json()).then((r: I_JsonObject) => {
                return { options: r.data.map((i: any) => ({ value: i.cod_pais, label: i.nombre_pais })) }
            })
        },
        request: {
            url: "https://axis.uninunez.edu.co/apiuninsc/paises",
            method: "GET",
            params: {}
        },
    },
};
