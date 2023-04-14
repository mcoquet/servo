class BasePlugin {
  constructor(options) {
    // The options parameter should be an object that contains any configuration
    // or initialization data needed by the plugin.
    this.options = options || {};
  }

  // This method should be implemented by each plugin to perform any setup or
  // initialization required by the plugin.
  async init() {
    // Do any setup or initialization here. Leave empty if not needed.
  }

  // This method should be implemented by each plugin to provide a public
  // interface for the plugin's functionality.
  async invoke(data) {
    // This method should perform whatever actions the plugin is designed to
    // perform, based on the data passed in.
    // The exact structure of the data will depend on the specific plugin.
    throw new Error('Not implemented');
  }
}

module.exports = BasePlugin;
