class LogTree {
  constructor () {
    this.options = {
      maxLevel: 1000
    };
  }

  check (tree, level) {
    return typeof tree === 'object' && level < this.options.maxLevel;
  }

  getPre (preStr, isLast) {
    return `${preStr}${isLast ? '└' : '├'}──`;
  }

  getPrePre (preStr, isLast) {
    return `${preStr}${isLast ? ' ' : '│'}  `;
  }

  parse (tree, level = 0, preStr = '', isCurrentLast) {
    if (!this.check(tree, level)) return '';

    // 1-ый вариант решения
    // const isTreeArray = Array.isArray(tree);
    // const children = isTreeArray ? tree : tree.items;
    // const firstStep = level === 0;
    // let str = isTreeArray ? '' : `${firstStep ? '' : this.getPre(preStr, isCurrentLast)}${tree.name}\n`;
    // let prePre = firstStep ? preStr : this.getPrePre(preStr, isCurrentLast);
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
        str += `${this.getPre(preStr, isLast)}${child.name}\n`;

        if (child.items) {
          str += this.parse(child.items, level + 1, this.getPrePre(preStr, isLast));
        }
      });
    } else {
      str += `${tree.name}\n`;

      if (tree.items) {
        str += this.parse(tree.items, level + 1);
      }
    }

    return str;
  }

  log (tree, maxLevel) {
    if (typeof maxLevel === 'number') this.options.maxLevel = maxLevel;

    console.log(this.parse(tree));
  }
}

export default new LogTree();
