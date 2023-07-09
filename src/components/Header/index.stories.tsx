import type { Meta, StoryObj } from '@storybook/react';

import { mockedWithStringProps, mockedWithElementProps } from './__mock__/props';

import { Header } from './index';

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const WithString: Story = {
  args: mockedWithStringProps
};

export const WithElement: Story = {
  args: mockedWithElementProps
};
