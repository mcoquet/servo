const BaseInterface = require('../../interfaces/BaseInterface');

describe('BaseInterface', () => {
  let baseInterface;

  beforeEach(() => {
    baseInterface = new BaseInterface();
  });

  test('should instantiate with default options', () => {
    expect(baseInterface.options).toEqual({});
  });

  test('should instantiate with custom options', () => {
    const customOptions = { exampleOption: 'exampleValue' };
    baseInterface = new BaseInterface(customOptions);
    expect(baseInterface.options).toEqual(customOptions);
  });

  test('init should be a function', () => {
    expect(typeof baseInterface.init).toBe('function');
  });

  //add a test for finalize
  test('finalize should be a function', () => {
    expect(typeof baseInterface.finalize).toBe('function');
  });

  test('send should throw a Not implemented error', async () => {
    await expect(baseInterface.send('test message')).rejects.toThrow('Not implemented');
  });

  test('receive should throw a Not implemented error', async () => {
    await expect(baseInterface.receive()).rejects.toThrow('Not implemented');
  });

  test('close should throw a Not implemented error', async () => {
    await expect(baseInterface.close()).rejects.toThrow('Not implemented');
  });
});
