import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration, { getSimpleStoryArgs } from './commonConfiguration';
import { TimeComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Time',
  component: TimeComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    tag: { control: "inline-radio", options: ["time"] }
  },
  args: {
    tag: 'time',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
type TC = Story["args"]["type"]

export const Time: Story = {
  args: getSimpleStoryArgs<TC>('simple')
};

// export const Select: Story = {
//   args: getSimpleStoryArgs<TC>('select')
// };
