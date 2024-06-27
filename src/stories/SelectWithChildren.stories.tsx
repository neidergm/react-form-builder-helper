import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectWithDependsComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    // render: (props) => commonConfiguration.render([props, child], {defaultValues: {select1: "1", select2: "11"}}),
    title: 'With Request/Select with depends',
    component: SelectWithDependsComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectWithDependsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDepends: Story = {
    args: {
        label: "Child",
        tag: "select",
        name: "select2",
        type: "simple",
        placeholder: "Pick one...",
        options: [],
        doRequest() {
            return new Promise((resolve) =>
                setTimeout(() => resolve({ options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"] }), 2000)
            )
        },
        request: {
            url: "https://example.api/countries",
            method: "GET",
        },
        validations: { required: true },
        dependsOn: "select1",
        // controlled: true
    }
};
