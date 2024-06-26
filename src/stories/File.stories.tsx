import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { FileComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/File',
  component: FileComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["file"] }
  },
  args: {
    tag: 'file',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Simple: Story = {
  args: getSimpleStoryArgs<TC>('simple')
};

export const Multiple: Story = {
  args: getSimpleStoryArgs<TC>('multiple')
};
