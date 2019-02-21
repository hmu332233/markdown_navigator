var program = require('commander');
const createIndexFile = require('./createIndexFile');

program
  .command('create <directory>')
  .description('creates a index.md to quickly navigate to all the files in your directory.')
  .option('-n, --name [name]', 'The name of the index file to be created.', 'index')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ mdnv create ./directory');
    console.log('    $ mdnv create ./directory -n navi');
    console.log('');
  })
  .action((dirPath, { name }) => {
    createIndexFile(dirPath, { name });
  });

program.parse(process.argv);