import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { CustomComponent } from './FormFieldsComponentsForStory';
import { forwardRef } from 'react';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Custom',
  component: CustomComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["custom"] }
  },
  args: {
    tag: 'custom',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const CustomComponentField = forwardRef<never, { [x: string]: never }>(
  (props, ref) => {
    return <div className={props.invalid ? "is-invalid" : ""}>
      <h3 className='text-info'>My custom component</h3>
      <input {...props} ref={ref} />
    </div>
  })

export const CustomOrExternal: Story = {
  args: {
    label: "A custom field component",
    name: "customField",
    validations: { required: true },
    type: CustomComponentField,
  }
};

