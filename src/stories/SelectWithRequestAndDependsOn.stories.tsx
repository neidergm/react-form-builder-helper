import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectWithRequestAndDependsComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    // render: (props) => commonConfiguration.render([props, child], {defaultValues: {select1: "1", select2: "11"}}),
    title: 'Advanced/With Request',
    decorators: [(Story) =>
        <div>
            <p>Default values have to be indicated in useForm params</p>
            <p>Otherwhise, the child component dont get data</p>
            <br />
            <br />

            <Story />
        </div>
    ],
    component: SelectWithRequestAndDependsComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
        // layout: 'centered',
    },
    // tags: ['autodocs'],
} satisfies Meta<typeof SelectWithRequestAndDependsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DependsOn: Story = {
    args: {
        label: "Child field",
        tag: "select",
        name: "child",
        type: "simple",
        placeholder: "Pick one...",
        options: [],
        doRequest(url) {
            console.log(`Requesting ${url}`)
            return new Promise((resolve) =>
                setTimeout(() => resolve({ options: ["Colombia", "Argentina", "Chile", "Ecuador", "Mexico"] }), 2000)
            )
        },
        request: {
            url: "https://example.api/countries/{parent}",
            method: "GET",
        },
        validations: { required: true },
        dependsOn: "parent",
    }
};

