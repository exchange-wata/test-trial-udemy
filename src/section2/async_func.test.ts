import { ERROR_MESSAGE_FOR_DELAY, delay } from './async_func';

const MESSAGE = 'Hello Jest';

describe('正常系', () => {
  it('delayが指定された時間後にメッセージを返却する', async () => {
    const result = await delay(MESSAGE, 1000);
    expect(result).toBe(MESSAGE);
  });
});

describe('異常系', () => {
  it('timeがマイナスの場合はエラーになる', async () => {
    try {
      await delay(MESSAGE, -1);
      throw Error('エラーが発生しませんでした。');
    } catch (e: any) {
      expect(e.message).toEqual(ERROR_MESSAGE_FOR_DELAY);
    }
  });
});
