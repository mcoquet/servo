const BaseModel = require('../../models/BaseModel');


describe('BaseModel', () => {
  test('predict throws an error when called directly', async () => {
    const model = new BaseModel();
    expect(model.predict()).rejects.toThrowError(/not implemented/i);
  });

  test('init does nothing by default', async () => {
    const model = new BaseModel();
    await expect(model.init()).resolves.not.toThrow();
  });
});
