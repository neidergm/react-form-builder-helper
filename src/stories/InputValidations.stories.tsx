import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { InputValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Field tags/Input',
    component: InputValidationsComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
} satisfies Meta<typeof InputValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
    args: {
        type: "text"
    }
};
