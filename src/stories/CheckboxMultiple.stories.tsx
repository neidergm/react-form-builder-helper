import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { CheckboxComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Checkbox',
  component: CheckboxComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["checkbox"] },
    type: { control: "inline-radio", options: ["multiple"] },
    // defaultValue: { control: "object" }
  },
  args: {
    tag: 'checkbox',
    defaultValue: []
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Multiple: Story = {
  args: {
    ...getSimpleStoryArgs<TC>('multiple', "checkbox"),
    options: ["Check 1", "Check 2", "Check 3"]
  }
};