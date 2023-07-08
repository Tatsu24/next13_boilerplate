import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedDefaultProps } from './__mock__/props';
import { TextField } from './index';

const user = userEvent.setup();

describe('<TextField />', () => {
  test('エラーなく表示され、入力ができる', async () => {
    render(<TextField {...mockedDefaultProps} />);
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('input text');
    expect(input).toHaveValue('input text');
  });
});
