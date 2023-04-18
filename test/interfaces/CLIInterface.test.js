const CLIInterface = require('../../interfaces/CLIInterface');
const enquirer = require('enquirer');

jest.mock('enquirer', () => {
  const originalEnquirer = jest.requireActual('enquirer');

  return {
    __esModule: true,
    ...originalEnquirer,
    prompt: jest.fn(),
  };
});

beforeEach(() => {
  enquirer.prompt.mockReset();
});

test('send should output the message to console.log', async () => {
  const originalConsoleLog = console.log;
  console.log = jest.fn();

  const cli = new CLIInterface();

  await cli.send('Test message');
  expect(console.log).toHaveBeenCalledWith('Test message');

  console.log = originalConsoleLog;
});

test('receive should return the correct user input', async () => {
  const testInput = 'Test input';
  enquirer.prompt.mockResolvedValue({ response: testInput });

  const cli = new CLIInterface();

  const response = await cli.receive({ message: 'Enter some text:' });
  expect(response).toEqual(testInput);
});

test('close should not throw an error', async () => {
  const cli = new CLIInterface();

  await expect(cli.close()).resolves.not.toThrow();
});
