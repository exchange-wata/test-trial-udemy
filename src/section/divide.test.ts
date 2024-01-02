import { ERROR_MESSAGE_FOR_DIVIDE, divide } from './divide';

describe('正常系', () => {
  it('割る数がゼロの時、エラーになる', () => {
    const result = () => divide(10, 0);
    expect(result).toThrow();
    expect(result).toThrow(ERROR_MESSAGE_FOR_DIVIDE);
  });

  it('割る数がゼロ以外の時、正常終了する', () => {
    expect(divide(10, 2)).toEqual(5);
  });
});
