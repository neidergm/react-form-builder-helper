import type { Meta, StoryObj } from '@storybook/react';

import Form from './../Form';

const meta = {
  // title: "Form",
  component: Form,
  argTypes: {
    onSubmit: { type: "function" }
  }
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fields: [
      {
        name: "firstname",
        tag: "input",
        type: "text",
        label: "First Name",
        validations: { required: true }
      }
    ],
    onSubmit: (data) => console.log(data)
  }
};

