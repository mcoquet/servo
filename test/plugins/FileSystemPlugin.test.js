const fs = require('fs');
const FilesystemPlugin = require('../../plugins/FileSystemPlugin');

jest.mock('fs');

describe('FilesystemPlugin', () => {
  let plugin;

  beforeEach(() => {
    plugin = new FilesystemPlugin();
  });

  describe('readFile', () => {
    test('should throw an error if path is not provided', () => {
      expect(plugin.readFile).toThrow('Missing path argument');
    });

    test('should throw an error if file not found', () => {
      fs.existsSync.mockReturnValue(false);

      expect(() => plugin.readFile('file.txt')).toThrow('File not found');
    });

    test('should read file if exists', () => {
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue('file content');

      expect(plugin.readFile('file.txt')).toEqual('file content');
    });
  });

  describe('writeFile', () => {
    test('should throw an error if path is not provided', () => {
      expect(() => plugin.writeFile()).toThrow('Missing path argument');
    });

    test('should write file', () => {
      fs.writeFileSync.mockReturnValue(undefined);

      expect(plugin.writeFile('file.txt', 'file content')).toEqual(true);
      expect(fs.writeFileSync).toHaveBeenCalledWith('./file.txt', 'file content');
    });
  });

  describe('mkdir', () => {
    test('should throw an error if path is not provided', () => {
      expect(() => plugin.mkdir()).toThrow('Missing path argument');
    });

    test('should create directory', () => {
      fs.mkdirSync.mockReturnValue(undefined);

      expect(plugin.mkdir('dir')).toEqual(true);
      expect(fs.mkdirSync).toHaveBeenCalledWith('./dir', { recursive: true });
    });
  });

  describe('rmdir', () => {
    test('should throw an error if path is not provided', () => {
      expect(() => plugin.rmdir()).toThrow('Missing path argument');
    });

    test('should remove directory', () => {
      fs.rmdirSync.mockReturnValue(undefined);

      expect(plugin.rmdir('dir')).toEqual(true);
      expect(fs.rmdirSync).toHaveBeenCalledWith('./dir', { recursive: true });
    });
  });

  describe('listDirectory', () => {
    test('should throw an error if path is not provided', () => {
      expect(() => plugin.listDirectory()).toThrow('Missing path argument');
    });

    test('should throw an error if directory not found', () => {
      fs.existsSync.mockReturnValue(false);

      expect(() => plugin.listDirectory('dir')).toThrow('Directory not found');
    });

    test('should list directory contents', () => {
      fs.existsSync.mockReturnValue(true);
      fs.readdirSync.mockReturnValue(['file1.txt', 'file2.txt']);

      expect(plugin.listDirectory('dir')).toEqual(['file1.txt', 'file2.txt']);
    });
  });
});
