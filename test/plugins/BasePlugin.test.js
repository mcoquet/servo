const BasePlugin = require('../../plugins/BasePlugin');

describe('BasePlugin', () => {
  describe('constructor', () => {
    it('should create a new instance of the BasePlugin class', () => {
      const plugin = new BasePlugin();
      expect(plugin).toBeInstanceOf(BasePlugin);
    });

    it('should set the options property based on the options passed to the constructor', () => {
      const options = { foo: 'bar' };
      const plugin = new BasePlugin(options);
      expect(plugin.options).toEqual(options);
    });
  });

  describe('init', () => {
    it('should be defined in the BasePlugin class', () => {
      const plugin = new BasePlugin();
      expect(plugin.init).toBeDefined();
      expect(typeof plugin.init).toEqual('function');
    });

    it('should resolve without error by default', async () => {
      const plugin = new BasePlugin();
      await expect(plugin.init()).resolves.not.toThrow();
    });
  });

  describe('invoke', () => {
    it('should be defined in the BasePlugin class', () => {
      const plugin = new BasePlugin();
      expect(plugin.invoke).toBeDefined();
      expect(typeof plugin.invoke).toEqual('function');
    });

    it('should throw an error when called with no implementation', async () => {
      const plugin = new BasePlugin();
      await expect(plugin.invoke()).rejects.toThrowError('Not implemented');
    });
  });
});
