class BaseInterface {
  constructor(options = {}) {
    this.options = options;
  }

  async init() {
    // Optional async initialization logic
  }

  //add a finalize method
  async finalize() {
    // Optional async finalization logic
  }

  async send(message, options = {}) {
    // Send a message to the interface
    throw new Error('Not implemented');
  }

  async receive(options = {}) {
    // Receive a message from the interface
    throw new Error('Not implemented');
  }

  async close() {
    // Close the interface and release resources
    throw new Error('Not implemented');
  }
}

module.exports = BaseInterface;
