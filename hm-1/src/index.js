import { loadJSON, logTree } from '@demdjanium/utils';
import { commands } from './commander.js';

const json = await loadJSON(`./${commands.filename}`);

logTree.log(json, commands.depth);
