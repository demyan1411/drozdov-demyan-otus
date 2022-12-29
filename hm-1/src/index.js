// import { loadJSON, logTree } from '@demdjanium/utils';
import { loadJSON, logTree } from '../../utils/src/index.js';
// import loadJSON from '../../utils/src/loadJSON.js';
// import logTree from '../../utils/src/logTree.js';
import { commands } from './commander.js';

const json = await loadJSON(`./${commands.filename}`);

logTree.log(json, commands.depth);
