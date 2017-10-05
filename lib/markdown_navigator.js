var fs = require('fs');
var dir = require('node-dir');
var _ = require('underscore');

var markdown_navigator = {
  
  create_index(option) {
    
    var index_file_name = option.name || 'index';
    console.log(index_file_name);

    const file_path_list = dir.files(`${__dirname}/test_dir`, {sync:true});
    let file_name_list = [];
    console.log(file_path_list);

    var data = '';

    for(var i in file_path_list) {
      const file_path = file_path_list[i];
      const file_name = _.last(file_path.split('/'));
      console.log(file_name);
      data += `[${file_name}](${file_path})<br>\n`;
    }

    fs.writeFileSync(`${index_file_name}.md`, data, 'utf8');
    console.log(`complete! create ${__dirname}/${index_file_name}.md`);
  }
};

module.exports = markdown_navigator;