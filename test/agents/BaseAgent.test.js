// test/agents/BaseAgent.test.js
const BaseAgent = require("../../agents/BaseAgent");
const BaseModel = require("../../models/BaseModel");
const BasePlugin = require("../../plugins/BasePlugin");
const BaseInterface = require("../../interfaces/BaseInterface");

class DummyModel extends BaseModel {}
class DummyPlugin extends BasePlugin {}
class DummyInterface extends BaseInterface {}

describe("BaseAgent", () => {
  test("should throw an error if the model is not an instance of BaseModel", () => {
    expect(() => new BaseAgent({}, [], new DummyInterface())).toThrow(
      "model must be an instance of BaseModel"
    );
  });

  test("should throw an error if plugins is not an array of instances of BasePlugin", () => {
    expect(() => new BaseAgent(new DummyModel(), ["not a plugin"], new DummyInterface())).toThrow(
      "plugins must be an array of instances of BasePlugin"
    );
  });

  test("should throw an error if the interface is not an instance of BaseInterface", () => {
    expect(() => new BaseAgent(new DummyModel(), [new DummyPlugin()], {})).toThrow(
      "interface must be an instance of BaseInterface"
    );
  });

  test("should initialize and finalize without errors", async () => {
    const model = new DummyModel();
    const plugins = [new DummyPlugin()];
    const iface = new DummyInterface();
    const agent = new BaseAgent(model, plugins, iface);

    await expect(agent.init()).resolves.not.toThrow();
    await expect(agent.finalize()).resolves.not.toThrow();
  });

  test("should throw an error when run method is not implemented", async () => {
    const agent = new BaseAgent(new DummyModel(), [new DummyPlugin()], new DummyInterface());
    await expect(agent.run()).rejects.toThrow("Method 'run' must be implemented in the derived class");
  });
});
