import path from 'path';
import { readdir } from 'node:fs/promises';
import { LogTree } from './logTree.js';

class LogDir extends LogTree {
  constructor(...args) {
    super(...args);

    this.dirCount = 0;
    this.fileCount = 0;
  }

  async _parse (dir, level = 0, preStr = '', lastDir = './') {
    if (!this._check(level)) return '';

    const dirPath = path.resolve(lastDir, dir);

    try {
      const files = await readdir(dirPath, { withFileTypes: true });
      let str = '';

      if (level === 0) {
        str = `${dirPath}\n`;
      }


      for (const index in files) {
        const file = files[index];
        const isLast = files.length - 1 === index;

        str += `${this._getPre(preStr, isLast)}${file.name}\n`;

        if (file.isDirectory()) {
          str += await this._parse(file.name, level + 1, this._getPrePre(preStr, isLast), dirPath);
          this.dirCount +=1;
        } else {
          this.fileCount +=1;
        }
      }

      if (level === 0) {
        str += `\n${this.dirCount} directories, ${this.fileCount} files`;
      }

      return str;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error('Not a directory.');
      }

      throw new Error(error);
    }
  }

  async log (commands) {
    if (typeof commands.depth === 'number') this._options.maxLevel = commands.depth;

    this.dirCount = 0;
    this.fileCount = 0;

    const result = await this._parse(commands.dir);

    console.log(result);
  }
}

export default new LogDir();
