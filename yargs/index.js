const argv = require('yargs').options({
  'b': {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base\'s table',
  },
  'u': {
    alias: 'until',
    type: 'number',
    demandOption: true,
    default: false,
    describe: 'List table until x number',
  },
  'l': {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Show table',
  },
})
.check((argv) => {
  if (isNaN(argv.b)) {
    throw 'The base is not a number';
  }

  if (isNaN(argv.u)) {
    throw 'The Until param is not a number';
  }

  return true;
})
.argv;

module.exports = argv;