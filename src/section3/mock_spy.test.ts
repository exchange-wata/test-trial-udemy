import { Calculator } from './mock_spy';

describe('spyOnを使用した関数のmock化', () => {
  describe('正常系: sumメソッド', () => {
    let result: number;
    let calculator: Calculator;
    let sumSpy: jest.SpyInstance;

    beforeAll(() => {
      calculator = new Calculator();
      sumSpy = jest.spyOn(calculator, 'sum');
      result = calculator.sum(1, 2);
    });

    afterAll(() => {
      sumSpy.mockRestore();
    });

    it('sumメソッドの実行', () => {
      expect(result).toBe(3);
    });

    it('sumメソッドの呼び出しを確認する', () => {
      expect(sumSpy).toHaveBeenCalledTimes(1);
      expect(sumSpy).toHaveBeenCalledWith(1, 2);
    });
  });
});
