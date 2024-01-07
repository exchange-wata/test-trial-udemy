describe('mock', () => {
  it('初めてのmock', () => {
    const word = 'Hello Mock';
    const mockFunc = jest.fn(() => word);
    // console.log(mockFunc());
    expect(mockFunc()).toBe(word);
  });

  it('mockImplementation', () => {
    const word = 'Hello Mock mockImplementation';
    const mockFunc = jest.fn();
    mockFunc.mockImplementation(() => word);
    // console.log(mockFunc());
    expect(mockFunc()).toBe(word);
  });
});
