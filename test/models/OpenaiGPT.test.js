const OpenaiGPT = require('../../models/OpenaiGPT');
require('dotenv').config();

describe('OpenaiGPT', () => {
  const apiKey = process.env.OPENAI_API_KEY;
  const prompt = 'Hello, world!';

  test('predict returns a single completion', async () => {
    const model = new OpenaiGPT({apiKey});
    const response = await model.predict(prompt);
    expect(typeof response).toBe('string');
  });

  test('predict generates completions that are non-empty strings', async () => {
    const model = new OpenaiGPT({apiKey});
    const response = await model.predict(prompt);
    
    expect(typeof response).toBe('string');
    expect(response.trim()).not.toBe('');
    
  });
});
