import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { InputComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Field tags/Input',
    component: InputComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        tag: { control: "inline-radio", options: ["input"] },
    },
    args: {
        tag: 'input'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Text: Story = {
    args: getSimpleStoryArgs<TC>("text"),
};
export const Number: Story = {
    args: getSimpleStoryArgs<TC>("number"),
};
export const Email: Story = {
    args: getSimpleStoryArgs<TC>("email"),
};
export const Textarea: Story = {
    args: getSimpleStoryArgs<TC>("textarea"),
};
export const Url: Story = {
    args: getSimpleStoryArgs<TC>("url"),
};
export const Tel: Story = {
    args: getSimpleStoryArgs<TC>("tel"),
};
export const Search: Story = {
    args: getSimpleStoryArgs<TC>("search"),
};
export const Password: Story = {
    args: getSimpleStoryArgs<TC>("password"),
};
export const Color: Story = {
    args: getSimpleStoryArgs<TC>("color"),
};
export const Range: Story = {
    args: getSimpleStoryArgs<TC>("range"),
};
