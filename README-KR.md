[English](README.md) | 한국어

# markdown_navigator

markdown_navigator는 여러분의 폴더 안의 모든 파일에 대해서  
편하게 이동할 수 있는 link를 만들어줍니다.

github과 같이 markdown을 사용하는 곳에서 빠르게 index를 만들기 위해 사용합니다.

![example](example.PNG)

## Installation 
```bash
$ npm install -g markdown_navigator
```
## Usage
```bash
$ mdnv create [foler_names] [options]
```
```bash
$ mdnv --help
usage: mdnv create [foler_names] [options]

folder_name:   names of folders where you want to create the index

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
|-- folder1
|   |-- file2.md
|   |-- file3.md
|-- folder2
|   |-- file4.md
|   |-- file5.md
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
[file2.md](/folder1/file2.md)
[file3.md](/folder1/file3.md)
[file4.md](/folder2/file4.md)
[file5.md](/folder2/file5.md)
```
<br/>  

**option example**  
이번에는 `folder_name`과 `-n` 옵션을 추가한 예제입니다.
```bash
$ cd test_folder/
$ mdnv create folder1 -n menu
```
다음과 같은 내용의 `menu.md`파일이 생성됩니다.
```
[file2.md](/folder1/file2.md)
[file3.md](/folder1/file3.md)
```
`folder_name`에는 여러개의 폴더명을 입력할 수도 있습니다.
```bash
$ cd test_folder/
$ mdnv create folder1/ foder2/
```
```bash
[file2.md](/folder1/file2.md)
[file3.md](/folder1/file3.md)
[file4.md](/folder2/file4.md)
[file5.md](/folder2/file5.md)
```

## Version

**현재 버전 : 0.2.0**  

[변경 내역](CHANGELOG.md)

## License

Licensed under [MIT License](LICENSE). © minung.han
