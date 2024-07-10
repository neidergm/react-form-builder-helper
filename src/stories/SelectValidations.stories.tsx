import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { SelectValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
    ...commonConfiguration,
    title: 'Field tags/Select',
    component: SelectValidationsComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SelectValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
    args: {},
};
