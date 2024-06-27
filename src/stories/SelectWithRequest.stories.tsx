import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectWithRequestComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'With Request/Select',
    component: SelectWithRequestComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectWithRequestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
    args: {
        label: "Select component",
        tag: "select",
        name: "selectFieldWithRequest",
        type: "simple",
        placeholder: "Pick one...",
        options: null,
        validations: {
            required: true
        },
        doRequest() {
            return new Promise((resolve) =>
                setTimeout(() => resolve({ options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"] }), 3000)
            )
        },
        request: {
            url: "https://example.api/countries",
            method: "GET",
            params: {}
        },
    },
};
