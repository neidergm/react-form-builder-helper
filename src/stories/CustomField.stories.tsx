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

type PropsCustomField = {
  testProp?: string | number | boolean;
  invalid: boolean,
  validations: any,
} & {
  [x: string]: string | boolean | number 
}

const CustomComponentField = forwardRef<HTMLInputElement, PropsCustomField>(
  ({ invalid, ...props }, ref) => {
    console.log(props)
    return <div className={invalid ? "is-invalid" : ""}>
      <h3 className="text-info">My custom component</h3>
      <input {...props} ref={ref} />
    </div>
  })

export const CustomOrExternal: Story = {
  args: {
    label: "A custom field component",
    wrapperClassName: "true",
    name: "customField",
    validations: { required: true },
    type: "MyCustomComponentName",
    Element: CustomComponentField
  }
};

