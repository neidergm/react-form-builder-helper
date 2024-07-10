import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { CheckboxValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Checkbox',
  component: CheckboxValidationsComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
  args: {}
};

