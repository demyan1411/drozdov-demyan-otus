import { Command, InvalidArgumentError } from 'commander';
const program = new Command();

function myParseInt(value) {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

program
  .option('-d, --depth <number>', 'depth', myParseInt, 1000)
  .option('-fn, --filename <string>', 'filename', 'object.json');

program.parse(process.argv);

export const commands = program.opts();
