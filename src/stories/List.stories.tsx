import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { ListComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Field tags/List',
    component: ListComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        tag: { control: "inline-radio", options: ["list"] },
    },
    args: {
        tag: 'list',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ListComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
// type TC = Story["args"]["type"]

export const List: Story = {
    args: {
        ...getSimpleStoryArgs("group"),
        validations: {
            max: 3,
            required: true
        },
        fields: [
            {
                wrapperClassName: "col-6",
                tag: "input",
                type: "text",
                name: "name",
                label: "Name:",
                validations: {
                    required: true
                }
            },
            {
                wrapperClassName: "col-6",
                tag: "input",
                type: "number",
                name: "age",
                label: "Age:",
                validations: {
                    required: true
                }
            }
        ],
    }
};