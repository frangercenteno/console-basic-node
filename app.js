const { multiply } = require('./helpers/multiply');
const argv = require('./yargs');

// Clear console when node is run
console.clear();

multiply(argv.b, argv.u, argv.l);