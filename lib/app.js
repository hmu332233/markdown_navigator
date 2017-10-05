var fs = require('fs');
var dir = require('node-dir');
var _ = require('underscore');
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

app.cmd('create :file_path', function (file_path) {
  console.log(app.argv.name);
  
  const option = {
    file_path: file_path,
    name: app.argv.name
  };
  
  console.log(option);
  markdown_navigator.create_index(option);
});

app.start();