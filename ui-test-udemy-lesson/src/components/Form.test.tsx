import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form, { PLACEHOLDER } from './Form';

let input: HTMLElement;

const user = userEvent.setup();

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
    input = screen.getByPlaceholderText(PLACEHOLDER);
  });

  it('初期状態ではテキストは空欄', () => {
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent('');
  });

  it('入力したテキストの取得', async () => {
    await user.type(input, 'test');
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('入力したテキストがサブミットされ、alertに表示される', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockReturnValue();
    const button = screen.getByRole('button');
    await user.type(input, 'test2');
    await user.click(button);
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith('submitted: test2');

    alertSpy.mockRestore();
  });
});
