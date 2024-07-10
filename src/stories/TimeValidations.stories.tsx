import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { TimeValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/Time',
  component: TimeValidationsComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof TimeValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
  args:{}
};

// export const Select: Story = {
//   args: getSimpleStoryArgs<TC>('select')
// };
