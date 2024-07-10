import type { Meta, StoryObj } from '@storybook/react';
import commonConfiguration from './commonConfiguration';
import { FileValidationsComponent } from './FormFieldsComponentsForStory';

const meta = {
  ...commonConfiguration,
  title: 'Field tags/File',
  component: FileValidationsComponent,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {},
} satisfies Meta<typeof FileValidationsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Validations: Story = {
  args: {}
};

