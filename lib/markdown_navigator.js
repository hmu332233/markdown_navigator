var fs = require('fs');
var dir = require('path-reader');
var _ = require('underscore');

var markdown_navigator = {
  
	// function create_index_file(option)
	// option {object}: index_file을 만들기 위한 옵션 -n, -p와 같은 옵션으로 입력받은 값이 들어간다
	//
	// option을 받아 index_file을 생성하고 저장한다.
	// ::NOTE::
	// 이 함수가 메인 함수이며, 이 함수를 이용하여 실제적인 index file이 생성된다
	create_index_file(option) {
    
		const self = this;
    
		const index_file_name = option.name || 'index';
		const dir_path = option.dir_path;
    
		const index_data = self.create_index_data(dir_path);

		fs.writeFileSync(`${index_file_name}.md`, index_data, 'utf8');
		console.log(`complete! create ./${index_file_name}.md`);
  },
  
	// function create_index_data(dir_path)
	// dir_path {string}: index_data를 만들 디렉토리의 path
	// return: data 한 디렉토리에 대한 index data
	//
	// 디렉토리 경로 한개를 입력 받아 index 데이터를 만든다.
	create_index_data(dir_path) {
    
		const file_path_list = dir.files(`./${dir_path}`, {sync:true});

		var data = '';
		for(var i in file_path_list) {
			// const file_path = file_path_list[i].split(dir_path)[1];
			const file_path = file_path_list[i];
			const file_name = _.last(file_path.split('/'));
			const file_url = file_path.replace(/ /gi,'%20');
			console.log('add:',file_path);
			data += `[${file_name}](${file_url})<br>\n`;
		}
		return data;
	}
  
};

module.exports = markdown_navigator;