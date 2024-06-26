import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { RadioComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Input',
  component: RadioComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["input"] }
  },
  args: {
    tag: 'input',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Radio: Story = {
  args: {
    ...getSimpleStoryArgs<TC>('radio'),
    options: ["Option 1", "Option 2", "Option 3"],
  }
};
