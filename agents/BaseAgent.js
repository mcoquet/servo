// agents/BaseAgent.js
const BaseModel = require("../models/BaseModel");
const BasePlugin = require("../plugins/BasePlugin");
const BaseInterface = require("../interfaces/BaseInterface");

class BaseAgent {
  constructor(model, plugins, iface) {
    if (!(model instanceof BaseModel)) {
      throw new Error("model must be an instance of BaseModel");
    }
    if (!Array.isArray(plugins) || !plugins.every((plugin) => plugin instanceof BasePlugin)) {
      throw new Error("plugins must be an array of instances of BasePlugin");
    }
    if (!(iface instanceof BaseInterface)) {
      throw new Error("interface must be an instance of BaseInterface");
    }

    this.model = model;
    this.plugins = plugins;
    this.interface = iface;
  }

  async init() {
    await this.model.init();
    await Promise.all(this.plugins.map((plugin) => plugin.init()));
    await this.interface.init();
  }

  async run() {
    throw new Error("Method 'run' must be implemented in the derived class");
  }

  async finalize() {
    await this.interface.finalize();
    await Promise.all(this.plugins.map((plugin) => plugin.finalize()));
    await this.model.finalize();
  }
}

module.exports = BaseAgent;
