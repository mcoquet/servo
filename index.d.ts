declare class BaseModel {
  constructor(options?: object);

  init(): Promise<void>;
  predict(prompt: any, options?: object): Promise<any>;
  generate(options?: object): Promise<any>;
  complete(prompt: any, options?: object): Promise<any>;
  encode(input: any, options?: object): Promise<any>;
}

declare class OpenaiGPTModel {
  constructor(options?: {
    apiKey?: string;
    model?: string;
  });

  init(): Promise<void>;
  predict(prompt: string): Promise<string | undefined>;
}

declare class BasePlugin {
  constructor(options?: object);

  init(): Promise<void>;
  invoke(data: any): Promise<any>;
}

declare class FilesystemPlugin extends BasePlugin {
  constructor(options?: {
    basePath?: string;
  });

  invoke(options: {
    action: string;
    path: string;
    data?: any;
  }): Promise<any>;

  readFile(path: string): string;
  writeFile(path: string, data: any): boolean;
  mkdir(path: string): boolean;
  rmdir(path: string): boolean;
  listDirectory(path: string): string[];
}

declare class BaseInterface {
  constructor(options?: object);

  init(): Promise<void>;
  send(message: any, options?: object): Promise<any>;
  receive(options?: object): Promise<any>;
  close(): Promise<void>;
}

export { BaseModel, OpenaiGPTModel, BasePlugin, FilesystemPlugin, BaseInterface };
