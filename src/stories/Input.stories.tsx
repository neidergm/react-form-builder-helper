import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { InputComponent } from '../MyOwnFormMaker';


const meta = {
    ...commonConfiguration,
    title: 'Form/Input',
    component: InputComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        label: "Input component",
        tag: "input",
        name: "inputField",
        type: "text",
        validations: {
            required: true
        }
    },
};
