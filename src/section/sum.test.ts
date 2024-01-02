import { sum } from './sum';

describe('正常系', () => {
  // FIXME: こちらのテストはなくてもいいかもしれない
  it('具体的な値を指定する', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('ランダムな値を指定する', () => {
    const a = Math.random();
    const b = Math.random();
    expect(sum(a, b)).toBe(a + b);
  });
});
