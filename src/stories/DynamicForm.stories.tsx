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
        defaultValues: {
            "text": "Neider"
        },
        // fieldComponents: {
        //     "select": {
        //         includeFormUtils: true,
        //         component: (props) => {
        //             console.log(props.formUtils)
        //             return <input />
        //         }
        //     }
        // }
    },
};

export const Disabled: Story = {
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
                label: "Type",
                name: "select",
                tag: "select",
                type: "simple",
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
        disabled: true
    },
}

export const DisabledOnFetchDefaultValues: Story = {
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
                label: "Select with request",
                name: "selectrequest",
                tag: "select",
                type: "simple",
                options: null,
                validations: {
                    required: true
                },
                dependsOn: "text",
                doRequest() {
                    return new Promise((resolve) => {
                        console.log("Fetching")
                        setTimeout(() => resolve({ options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"] }), 100)
                    })
                },
                // defaultValue: "Colombia",
                request: {
                    url: "https://example.api/countries",
                    method: "GET",
                    params: {}
                },
            }
        ],
        onSubmit: (d) => {
            console.log(d)
        },
        onInvalidSubmit: (d) => {
            console.log(d)
        },
        disableOnLoading: true,
        defaultValues: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ "select": "opcion1", "text": "Developer", selectrequest: "Colombia" })
                }, 100)
            })
        }
    },
}
