import { Command } from 'commander';
import { commander } from '@demdjanium/utils';

const program = new Command();

program
  .option('-d, --depth <number>', 'depth', commander.checkArgumentInt, 1000)
  .option('-fn, --filename <string>', 'filename', 'test-objects/object.json');

program.parse(process.argv);

export const commands = program.opts();
