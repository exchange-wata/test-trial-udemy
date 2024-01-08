describe('mock関数', () => {
  const mockFn = jest.fn();

  afterEach(() => {
    mockFn.mockReset();
  });

  it('mock関数の呼び出しを確認する', () => {
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });

  it('mock関数の複数回呼び出しを確認する', () => {
    const mockFnCalledTimes = 3;
    Array(mockFnCalledTimes)
      .fill(mockFnCalledTimes)
      .forEach(() => mockFn());
    expect(mockFn).toHaveBeenCalledTimes(mockFnCalledTimes);
  });

  it('mock関数の呼び出し時に引数を設定し、それが返されることを確認する', () => {
    const word = 'hoge';
    mockFn(word);
    expect(mockFn).toHaveBeenCalledWith(word);
  });
});
