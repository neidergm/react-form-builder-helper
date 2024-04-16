import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectComponent } from '../MyOwnFormMaker';

const meta = {
    ...commonConfiguration,
    title: 'Form/Select',
    component: SelectComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        label: "Select component",
        tag: "select",
        name: "selectField",
        type: "simple",
        placeholder: "Pick one...",
        options: ["Option1", "Option2", { "label": "Option3", "value": "op3" }],
        validations: {
            required: true
        }
    },
};
export const Multiple: Story = {
    args: {
        label: "Select component",
        tag: "select",
        name: "selectMultipleField",
        type: "multiple",
        placeholder: "Pick one...",
        options: ["Option1", "Option2", { "label": "Option3", "value": "op3" }],
        validations: {
            required: true
        }
    },
};
