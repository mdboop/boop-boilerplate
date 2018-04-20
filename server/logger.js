const chalk = require('chalk');

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },
  log: (msg) => {
    console.log(msg);
  },
  warn: (msg) => {
    conosole.log(chalk.yellow(msg));
  },
  booted: (port) => {
    console.log(`Server started ${chalk.green('✓')}`);
    console.log(`
      visit here: ${chalk.magenta(`http://localhost:${port}`)}
    `);
  },
};

module.exports = logger;