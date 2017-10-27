# markdown_navigator

markdown_navigator는 여러분의 폴더 안의 모든 파일에 대해서  
편하게 이동할 수 있는 link를 만들어줍니다.

github과 같이 markdown을 사용하는 곳에서 빠르게 index를 만들기 위해 사용합니다.

## Installation 
```bash
$ npm install -g markdown_navigator
```
## Usage
```bash
$ mdnv create [foler_name] [options]
```
```bash
$ mdnv --help
usage: mdnv create [foler_name] [options]

folder_name:   The name of the folder where you want to create the index

options:
  -n name      The name of the index file to be created. default is "index"
  -h, --help   You're staring at it
```


### Basic
현재 있는 위치에서 모든 파일에 대해 이동이 가능한 index.md 파일을 생성합니다.
```
$ mdnv create
```


### Example  
**example folder**
```
test_folder
|-- file1.md
|-- folder
|   |-- file2.md
|   |-- file3.md
```
<br/>  
**basic example**
```bash
$ cd test_folder/
$ mdnv create
```
다음과 같은 내용의 `index.md`파일이 생성됩니다.
```
[file1.md](/file1.md)
[file2.md](/folder/file2.md)
[file3.md](/folder/file3.md)
```
<br/>  
**option example**  
이번에는 `folder_name`과 `-n` 옵션을 추가한 예제입니다.
```bash
$ cd test_folder/
$ mdnv create folder -n menu
```
다음과 같은 내용의 `menu.md`파일이 생성됩니다.
```
[file2.md](/folder/file2.md)
[file3.md](/folder/file3.md)
```

## Version

**현재 버전 : 0.0.1**  

[변경 내역](CHANGELOG.md)

## License

Licensed under [MIT License](LICENSE). © minung.han
