const fs = require('fs');
const BasePlugin = require('./baseplugin');

class FilesystemPlugin extends BasePlugin {
  constructor(options = {}) {
    super(options);
    this.basePath = options.basePath || '.';
  }

  async invoke({ action, path, data }) {
    if (!action) {
      throw new Error('Missing action argument');
    }

    switch (action) {
      case 'read':
        return this.readFile(path);
      case 'write':
        return this.writeFile(path, data);
      case 'mkdir':
        return this.mkdir(path);
      case 'rmdir':
        return this.rmdir(path);
      case 'ls':
        return this.listDirectory(path);
      default:
        throw new Error(`Invalid action: ${action}`);
    }
  }

  readFile(path) {
    if (!path) {
      throw new Error('Missing path argument');
    }

    const fullPath = `${this.basePath}/${path}`;

    if (!fs.existsSync(fullPath)) {
      throw new Error('File not found');
    }

    return fs.readFileSync(fullPath, 'utf8');
  }

  writeFile(path, data) {
    if (!path) {
      throw new Error('Missing path argument');
    }

    const fullPath = `${this.basePath}/${path}`;

    fs.writeFileSync(fullPath, data);

    return true;
  }

  mkdir(path) {
    if (!path) {
      throw new Error('Missing path argument');
    }

    const fullPath = `${this.basePath}/${path}`;

    fs.mkdirSync(fullPath, { recursive: true });

    return true;
  }

  rmdir(path) {
    if (!path) {
      throw new Error('Missing path argument');
    }

    const fullPath = `${this.basePath}/${path}`;

    fs.rmdirSync(fullPath, { recursive: true });

    return true;
  }

  listDirectory(path) {
    if (!path) {
      throw new Error('Missing path argument');
    }

    const fullPath = `${this.basePath}/${path}`;

    if (!fs.existsSync(fullPath)) {
      throw new Error('Directory not found');
    }

    return fs.readdirSync(fullPath);
  }
}

module.exports = FilesystemPlugin;
