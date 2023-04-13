const { OpenAIApi, Configuration } = require('openai');

class OpenaiGPTModel {
  constructor(options = {}) {
    this.options = options;
    this.apiKey = options.apiKey;
    this.model = options.model || 'gpt-3.5-turbo-0301';
  }

  async predict(prompt) {
    const config = new Configuration({ apiKey: this.apiKey });
    const openai = new OpenAIApi(config);
    try {
      const response = await openai.createChatCompletion({
        model: this.model,
        messages: [ {"role": "user", "content": prompt},],
        temperature: 0.5,
      });
      return response.data.choices[0].message.content;
    } catch (reason) {
      console.error(reason.response.data);
    }
  }


  async init() {
    // do nothing by default
  }
}

module.exports = OpenaiGPTModel;
