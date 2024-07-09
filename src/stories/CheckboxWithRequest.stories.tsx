import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { CheckboxWithRequestComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Advanced/With Request',
    component: CheckboxWithRequestComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    // tags: ['autodocs'],
} satisfies Meta<typeof CheckboxWithRequestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
    args: {
        label: "Checkbox component",
        tag: "checkbox",
        name: "checkFieldWithRequest",
        type: "multiple",
        options: [],
        validations: {
            required: true
        },
        defaultValue: [],
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
