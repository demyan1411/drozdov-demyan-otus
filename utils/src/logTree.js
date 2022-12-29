import {
  preLast, pre, prePreLast, prePre
} from './constants.js';

export class LogTree {
  constructor () {
    this._options = {
      maxLevel: 1000
    };
  }

  _check (level) {
    return level < this._options.maxLevel;
  }

  _getPre (preStr, isLast) {
    return `${preStr}${isLast ? preLast : pre}`;
  }

  _getPrePre (preStr, isLast) {
    return `${preStr}${isLast ? prePreLast : prePre}`;
  }

  _parse (tree, level = 0, preStr = '', isCurrentLast) {
    if (!(this._check(level) && typeof tree === 'object')) return '';

    // 1-ый вариант решения //
    // const isTreeArray = Array.isArray(tree);
    // const children = isTreeArray ? tree : tree.items;
    // const firstStep = level === 0;
    // let str = isTreeArray ? '' : `${firstStep ? '' : this._getPre(preStr, isCurrentLast)}${tree.name}\n`;
    // let prePre = firstStep ? preStr : this._getPrePre(preStr, isCurrentLast);
    //
    // if (children) {
    //   children.forEach((child, index) => {
    //     const isLast = children.length - 1 === index;
    //
    //     str += this.parse(child, level + 1, prePre, isLast);
    //   });
    // }

    // 2-ой вариант решения
    let str = '';
    if (Array.isArray(tree)) {
      tree.forEach((child, index) => {
        const isLast = tree.length - 1 === index;
        str += `${this._getPre(preStr, isLast)}${child.name}\n`;

        if (child.items) {
          str += this._parse(child.items, level + 1, this._getPrePre(preStr, isLast));
        }
      });
    } else {
      str += `${tree.name}\n`;

      if (tree.items) {
        str += this._parse(tree.items, level + 1);
      }
    }

    return str;
  }

  log (tree, maxLevel) {
    if (typeof maxLevel === 'number') this._options.maxLevel = maxLevel;

    console.log(this._parse(tree));
  }
}

export default new LogTree();
