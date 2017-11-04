var _ = require('underscore');
var flatiron = require('flatiron');
var app = flatiron.app;

var markdown_navigator = require('./markdown_navigator');

var help = [
  'usage: mdnv create [foler_name] [options]',
  '',
  'folder_name:   The name of the folder where you want to create the index',
  '',
  'options:',
  '  -n name      The name of the index file to be created. default is "index"',
  '  -h, --help   You are staring at it'
];

var argvOptions = {
  'name':  {alias: 'n'},
  'help':  {alias: 'h'},
};

app.use(flatiron.plugins.cli, {
  argv: argvOptions,
  usage: help
});

app.cmd('create', function () {

  const option = {
    dir_path: '/',
    name: app.argv.name
  };
  
  markdown_navigator.create_index_file(['/'], option);
});

app.cmd(/create (.+)/, function () {

  const dir_paths = _.without(app.argv._, 'create');
  const option = {
    dir_path: app.argv._[1],
    name: app.argv.name
  };
  
  console.log(dir_paths);
  
  markdown_navigator.create_index_file(dir_paths, option);
});

app.start();