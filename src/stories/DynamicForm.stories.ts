import type { Meta, StoryObj } from '@storybook/react';
import DynamicForm from '../components/DynamicForm';

 './../components';

const meta = {
    title: 'Form/Dynamic Form',
    component: DynamicForm,
    parameters: {

        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DynamicForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        fields: [
            {
                // className: "form-control",
                label: "Name",
                name: "text",
                tag: "input",
                type: "text",
                placeholder: "Write name",
                validations: {
                    minLength: 3,
                    required: true
                }
            },
            {
                // className: "form-control",
                label: "Age",
                name: "number",
                tag: "input",
                type: "number",
                validations: {
                    min: 3,
                    required: true
                }
            },
            {
                // className: "form-select ",
                label: "Type",
                name: "select",
                tag: "select",
                type: "simple",
                options: ["opcion1", "opcion2", "opcion3"],
                // options: [{value:"opcion1", label: "Opción 1"}, {value:"opcion2", label: "Opción 2"}, {value:"opcion3", label: "Opción 3"}],
                validations: {
                    required: true
                }
            },
            {
                // className: "form-select ",
                label: "Check",
                name: "checkbox",
                tag: "checkbox",
                type: "simple",
                // options: ["opcion1", "opcion2", "opcion3"],
                validations: {
                    required: true
                }
            },
            {
                // className: "form-select ",
                label: "Radio",
                name: "radio",
                tag: "input",
                type: "radio",
                options: ["opcion1", "opcion2", "opcion3"],
                validations: {
                    required: true
                }
            },

        ],
        onSubmit: (d) => {
            console.log(d)
        },
        onInvalidSubmit: (d) => {
            console.log(d)
        },
    },
};
