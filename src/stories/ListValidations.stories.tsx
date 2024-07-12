import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { ListValidationsComponent } from './FormFieldsComponentsForStory';
const meta = {
    ...commonConfiguration,
    title: 'Field tags/List',
    component: ListValidationsComponent,
    parameters: {
        controls: { sort: 'requiredFirst' },
    },
} satisfies Meta<typeof ListValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
    args: {},
};
