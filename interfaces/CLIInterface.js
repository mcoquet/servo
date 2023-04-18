const BaseInterface = require('./BaseInterface');
const { prompt } = require('enquirer');

class CLIInterface extends BaseInterface {
  async send(message, options = {}) {
    console.log(message);
  }

  async receive(options = {}) {
    const { type = 'input', message, choices } = options;

    const promptOptions = {
      type,
      message,
      choices,
      name: 'response',
    };

    const result = await prompt(promptOptions);
    return result.response;
  }

  async close() {
    // No resources to release for CLIInterface
  }
}

module.exports = CLIInterface;
