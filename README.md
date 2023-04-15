# A KISS framework to build ai driven agents

This open-source JavaScript framework helps you create AI-driven agents with models, plugins, and interfaces.

## Components

**Agents:** Perform tasks and make decisions using models and plugins.

**Models:** Provide AI capabilities for agents (OpenAI gtp family, etc).

**Plugins:** Enable agents to interact with the outside world (e.g., file system, browser, email).

**Interfaces:** Define how users interact with agents (e.g., web, mobile, chatbots).

## Directory Structure
```
- src/
    - agents/
        - baseAgent.js
    - models/
        - baseModel.js
    - plugins/
        - basePlugin.js
    - interfaces/
        - baseInterface.js
    - config.js
```

## Usage

Extend the base classes to create custom agents, models, plugins, and interfaces.

Register your custom components in config.js.

Initialize the system with the configuration object.

For more information, refer to the examples and documentation.