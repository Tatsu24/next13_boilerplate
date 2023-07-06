import type { Meta, StoryObj } from '@storybook/react';

import { mockedDefaultProps, mockedDisabledProps } from './__mock__/props';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: mockedDefaultProps
};

export const Disabled: Story = {
  args: mockedDisabledProps
};
