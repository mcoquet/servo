class BaseModel {
  constructor(options = {}) {
    this.options = options;
  }

  async init() {
    // Optional async initialization logic
  }

  async predict(prompt, options = {}) {
    throw new Error('Not implemented');
  }

  async generate(options = {}) {
    throw new Error('Not implemented');
  }

  async complete(prompt, options = {}) {
    throw new Error('Not implemented');
  }

  async encode(input, options = {}) {
    throw new Error('Not implemented');
  }
}

module.exports = BaseModel;