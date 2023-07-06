import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedDefaultProps, mockedDisabledProps } from './__mock__/props';
import { Button } from './index';

const user = userEvent.setup();

const mockOnClick = jest.fn();

describe('<Button />', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });
  test('エラーなく表示できる', () => {
    render(<Button {...mockedDefaultProps} />);
    expect(screen.getByRole('button', { name: 'ボタン' })).toBeInTheDocument();
  });

  test('クリックするとonClickが呼ばれる', async () => {
    render(<Button {...mockedDefaultProps} onClick={mockOnClick} />);
    const button = screen.getByRole('button', { name: 'ボタン' });
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('disabled=trueのときはクリックできない', () => {
    render(<Button {...mockedDisabledProps} />);
    expect(screen.getByRole('button', { name: 'ボタン' })).toBeDisabled();
  });
});
