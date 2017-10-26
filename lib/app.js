var flatiron = require('flatiron');
var app = flatiron.app;

var markdown_navigator = require('./markdown_navigator');

var argvOptions = {
  'name':   {alias: 'n'},
};

app.use(flatiron.plugins.cli, {
  argv: argvOptions,
  usage: ''
});

app.cmd('create', function () {

  const option = {
    dir_path: '/',
    name: app.argv.name
  };
  
  markdown_navigator.create_index(option);
});


app.cmd(/create (.+)/, function () {

  const option = {
    dir_path: app.argv._[1],
    name: app.argv.name
  };
  
  markdown_navigator.create_index(option);
});

app.start();