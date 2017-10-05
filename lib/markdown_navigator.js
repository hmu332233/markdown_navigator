var fs = require('fs');
var dir = require('node-dir');
var _ = require('underscore');

var markdown_navigator = {
  
  create_index(option) {
    
    const index_file_name = option.name || 'index';
    const dir_path = option.dir_path;
    
    const file_path_list = dir.files(`./${dir_path}`, {sync:true});
    let file_name_list = [];
    
    var data = '';

    for(var i in file_path_list) {
      const file_path = file_path_list[i].split(dir_path)[1];
      const file_name = _.last(file_path.split('/'));
      console.log('add:',file_path);
      data += `[${file_name}](${file_path})<br>\n`;
    }

    fs.writeFileSync(`${index_file_name}.md`, data, 'utf8');
    console.log(`complete! create $./${index_file_name}.md`);
  }
};

module.exports = markdown_navigator;