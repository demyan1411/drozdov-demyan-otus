import { loadJSON } from '@demdjanium/utils';

import { commands } from './commander.js';
import logTree from './logTree.js';

const json = await loadJSON(`./${commands.filename}`);

logTree.log(json, commands.depth);
