import fs from 'fs';
import { readFile } from './mock_module';

jest.mock('fs');

describe('fsモジュールをmockしたテスト', () => {
  const dummyData = 'dummy data';

  beforeAll(() => {
    const mockFs = jest.mocked(fs);
    mockFs.readFileSync.mockReturnValue(dummyData);
  });

  it('データ読み取りができているか確認する', () => {
    const result = readFile('dummy/path');
    expect(result).toBe(dummyData);
  });

  it('メソッドが呼び出されているかを確認する', () => {
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  });
});
