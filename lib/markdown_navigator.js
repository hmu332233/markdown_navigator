var fs = require('fs');
var dir = require('path-reader');

const last = arr => arr[arr.length - 1];

function createIndexData(directoryPath) {
	const filePathList = dir.files(`${directoryPath}`, { sync: true });
	let data = '';
	for(let path of filePathList) {
		const fileName = last(path.split('/'));
		const fileUrl = path.replace(/ /gi,'%20');
		console.log('add:', fileUrl);
		data += `[${fileName}](${fileUrl})  \n`;
	}
	return data;
};

function createIndexFile(dirPath, { name = 'index' }) {
	const indexData = createIndexData(dirPath);
	fs.writeFileSync(`${name}.md`, indexData, 'utf8');
	console.log(`complete! create ./${name}.md`);
}

module.exports = {
	createIndexData,
	createIndexFile
};