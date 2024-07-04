import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { HtmlComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Html',
  component: HtmlComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["HTML"] },
    label: { control: "text" }
  },
  args: {
    tag: 'HTML',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HtmlComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "div",
    name: "divField",
    value: "<div><h3>Hi, i'm a content!</h3></div>"
  }
};

