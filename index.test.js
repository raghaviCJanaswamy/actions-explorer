test('prints hello message', () => {
    console.log = jest.fn();
    require('./index');
    expect(console.log).toHaveBeenCalledWith("Hello, Gitsec world");
});