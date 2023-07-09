import { ButtonProps } from '../index';

export const mockedDefaultProps: ButtonProps = {
  children: 'ボタン',
  disabled: false,
  onClick: () => alert('clicked')
};

export const mockedDisabledProps: ButtonProps = {
  children: 'ボタン',
  disabled: true,
  onClick: () => alert('clicked')
};
