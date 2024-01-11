import axios from 'axios';
import Users from './practice';

jest.mock('axios');

const returnedData = [
  { id: 1, name: 'hoge' },
  { id: 2, name: 'moge' },
];

describe('演習', () => {
  const mockFn = jest.mocked(axios);
  beforeEach(() => {
    mockFn.get.mockResolvedValue({ data: returnedData });
  });

  afterEach(() => {
    mockFn.get.mockClear();
  });

  it('データ取得ができているか確認する', async () => {
    const result = await Users.getAll();
    expect(result).toStrictEqual(returnedData);
  });

  it('APIが呼ばれているか確認する', async () => {
    await Users.getAll();
    expect(mockFn.get).toHaveBeenCalledTimes(1);
  });
});
