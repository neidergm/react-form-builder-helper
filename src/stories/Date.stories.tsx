import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { DateComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Date',
  component: DateComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["date"] }
  },
  args: {
    tag: 'date',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Date: Story = {
  args: getSimpleStoryArgs<TC>('date')
};

export const Month: Story = {
  args: getSimpleStoryArgs<TC>('month')
};
