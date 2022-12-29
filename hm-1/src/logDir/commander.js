import { Command } from 'commander';
import { commander } from '@demdjanium/utils';

const program = new Command();

program
  .option('-d, --depth <number>', 'depth', commander.checkArgumentInt, 1000)
  .option('-dir, --dir <string>', 'directory name', './');

program.parse(process.argv);

export const commands = program.opts();
