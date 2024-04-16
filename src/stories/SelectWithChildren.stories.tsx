import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectWithChildrenComponent } from '../MyOwnFormMaker';
import { I_JsonObject } from '../interfaces/generic.interfaces';

const child = {
    label: "Child",
    tag: "select",
    name: "select2",
    type: "simple",
    placeholder: "Pick one...",
    options: [],
    doRequest(url: string, method: string, params: any) {
        return fetch(url + params, { method }).then((response) => response.json()).then((r: I_JsonObject) => {
            return { options: r.data.map((i: I_JsonObject) => ({ value: i.codalf, label: i.nomid1 })) }
        })
    },
    validations: { required: true },
    request: {
        url: "https://axis.uninunez.edu.co/apiuninsc/programas/2024-2S/1/1/",
        method: "GET",
        params: "{select1}"
    },
    dependsOn: "select1",
    controlled: true
}

const meta = {
    ...commonConfiguration,
    render: (props) => commonConfiguration.render([props, child]),
    title: 'Form/Select with children',
    component: SelectWithChildrenComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectWithChildrenComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithChildren: Story = {
    args: {
        label: "Parent",
        tag: "select",
        name: "select1",
        type: "simple",
        placeholder: "Pick one...",
        options: [{ label: "PREGRADO", value: "1" }, { label: "POSGRADO", value: "2" }, { label: "TÉCNOLOGO", value: "5" }],
        // defaultValue: "008",
        validations: {
            required: true
        },
    },
};
