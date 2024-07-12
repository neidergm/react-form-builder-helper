import type { Meta, StoryObj } from '@storybook/react';
import { DynamicFormComponent } from './FormFieldsComponentsForStory';

const meta = {
    title: 'Form/Dynamic Form',
    component: DynamicFormComponent,
    parameters: {

        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DynamicFormComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        fields: [
            {
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
                label: "Type",
                name: "select",
                tag: "select",
                type: "simple",
                options: ["opcion1", "opcion2", "opcion3"],
                validations: {
                    required: true
                }
            },
            {
                label: "Check",
                name: "checkbox",
                tag: "checkbox",
                type: "simple",
                validations: {
                    required: true
                }
            },
            {
                label: "Radio",
                name: "radio",
                tag: "input",
                type: "radio",
                options: ["opcion1", "opcion2", "opcion3"],
                validations: {
                    required: true
                }
            }
        ],
        onSubmit: (d) => {
            console.log(d)
        },
        onInvalidSubmit: (d) => {
            console.log(d)
        },
        defaultValues:{
            "text": "Neider"
          }
    },
};
