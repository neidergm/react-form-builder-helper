import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Field tags/Select',
    component: SelectComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        tag: { control: "inline-radio", options: ["select"] },
        type: { control: "inline-radio", options: ["multiple"] },
        defaultValue: { control: "object" }
    },
    args: {
        tag: 'select',
        defaultValue: []
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
    args: {
        label: "Select component",
        name: "selectMultipleField",
        type: "multiple",
        placeholder: "Pick one or more...",
        options: ["Option1", "Option2", { "label": "Option3", "value": "Option3" }],
        validations: {
            required: true
        }
    },
};
