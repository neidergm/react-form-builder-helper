import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { RadioWithRequestComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Advanced/With Request',
    component: RadioWithRequestComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    // tags: ['autodocs'],
} satisfies Meta<typeof RadioWithRequestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
    args: {
        label: "Select component",
        tag: "input",
        name: "selectFieldWithRequest",
        type: "radio",
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
