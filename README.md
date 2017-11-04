English | [한국어](README-KR.md)

# markdown_navigator

**markdown_navigator** creates a link to quickly navigate to all the files in your folder.

Use it to quickly create index where markdown is used, such as "github".

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
If only the default command is entered,  
creates a 'index.md' for all files within the currently located folder.
```bash
$ mdnv create
```


### Example  
**example folder**
```bash
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
`index.md` is created with the following contents.
```bash
[file1.md](/file1.md)
[file2.md](/folder1/file2.md)
[file3.md](/folder1/file3.md)
[file4.md](/folder2/file4.md)
[file5.md](/folder2/file5.md)
```
<br/>  

**option example**  
This is an example of adding `folder_name` and `-n` options.
```bash
$ cd test_folder/
$ mdnv create folder -n menu
```
`menu.md` is created with the following contents.
```bash
[file2.md](/folder1/file2.md)
[file3.md](/folder1/file3.md)
```
You can also enter multiple folder names in `folder_name`.
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

**current verstion : 0.2.0**  

[change log](CHANGELOG.md)

## License

Licensed under [MIT License](LICENSE). © minung.han
