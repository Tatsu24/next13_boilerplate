import type { Meta, StoryObj } from '@storybook/react';

import { mockedDefaultProps, mockedIsErrorProps } from './__mock__/props';

import { TextField } from './index';

const meta: Meta<typeof TextField> = {
  title: 'components/TextField',
  component: TextField
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: mockedDefaultProps
};

export const IsError: Story = {
  args: mockedIsErrorProps
};
