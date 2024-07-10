import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { DateValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Date',
  component: DateValidationsComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
    argTypes: {
      valueAsDate: { control: "boolean" }
    }
  },
} satisfies Meta<typeof DateValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
  args: {}
};
