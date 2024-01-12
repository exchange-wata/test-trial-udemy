import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Componentのテスト', () => {
  it('buttonタブがレンダリングされる', () => {
    const label = 'ボタン';
    render(<Button label={label} onClick={() => alert('clicked')} />);

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(label);
  });
});
