describe('mockの戻り値を設定する', () => {
  const word = 'Hello';
  const mockFn = jest.fn();

  afterEach(() => {
    mockFn.mockReset();
  });

  it('mock関数に戻り値を設定する', () => {
    mockFn.mockReturnValue(word);
    expect(mockFn()).toBe(word);
  });

  it('mock関数に一度だけ戻り値を設定する', () => {
    mockFn.mockReturnValueOnce(word);
    expect(mockFn()).toBe(word);
    expect(mockFn()).toBe(undefined);
  });

  it('mock関数に非同期の戻り値を設定する', async () => {
    mockFn.mockResolvedValue(word);
    expect(await mockFn()).toBe(word);
  });
});
