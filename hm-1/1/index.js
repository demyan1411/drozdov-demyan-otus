import { commands } from '../commander.js';
import loadJSON from '../../utils/loadJSON.js';
import logTree from '../logTree.js';

const json = await loadJSON(`./${commands.filename}`);

logTree.log(json, commands.depth);
