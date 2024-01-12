import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Componentのテスト', () => {
  it('buttonタブがレンダリングされる', () => {
    render(<Button label={'ボタン'} onClick={() => alert('clicked')} />);

    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
