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
    type: { control: "inline-radio", options: ["simple"] },
    defaultValue: { control: "boolean" }
  },
  args: {
    tag: 'checkbox'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Simple: Story = {
  args: getSimpleStoryArgs<TC>('simple', "checkbox")
};


// const meta2 = {
//   ...commonConfiguration,
//   title: 'Field tags/Checkbox',
//   component: CheckboxComponent,
//   parameters: {
//     controls: { sort: 'requiredFirst' },
//   },
//   argTypes: {
//     tag: { control: "inline-radio", options: ["checkbox"] },
//     defaultValue: { control: "object" }
//   },
//   args: {
//     tag: 'checkbox'
//   },
//   tags: ['autodocs'],
// } satisfies Meta<typeof CheckboxComponent>;

// type StoryMultiple = StoryObj<typeof meta2>;

// export const Multiple: StoryMultiple = {
//   args: {
//     ...getSimpleStoryArgs<TC>('multiple', "checkbox"),
//     options: ["Check 1", "Check 2", "Check 3"]
//   }
// };