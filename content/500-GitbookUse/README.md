# GitbookUse



### Gitbook命令安装

```bash
npm install gitbook-cli -g
```



### 预览与打包

预览：**gitbook serve**

打包：**npm run build**，

默认打包在 **docs** 文件夹，电子书文件在 **content** 文件夹，

可以在根目录的 **package.json** 修改。



### 项目结构

| File        | 作用描述                    |
| ----------- | --------------------------- |
| book.json   | 记录电子书的配置 (可选)     |
| README.md   | 前言 或者 电子书的介绍 必须 |
| SUMMARY.md  | 电子书的目录                |
| GLOSSARY.md | 术语表 ，可选               |
| LANGS.md    | 多语言，可选                |

**多语言**

当使用多语言时，为每一种语言建立一个子目录，然后需要额外根目录建立一个文件 `LANGS.md`

```markdown
# Languages

* [English](en/)
* [French](fr/)
* [Español](es/)
```



### 目录文件

**SUMMARY.md**：[目录文件夹] (目标路径)



### gitbook命令

|                                             |                                                              |
| :------------------------------------------ | ------------------------------------------------------------ |
| gitbook init                                | 初始化                                                       |
| gitbook help                                | 列出gitbook所有的命令                                        |
| gitbook serve                               | 本地预览                                                     |
| gitbook build                               | 发布电子书                                                   |
| gitbook build ./{book_name} ./{outputFolde} | 发布电子书 ( book_name文件夹），若有output文件夹，则在output生成 |
| gitbook build ./ --log=debug --debug        | 使用 `--log=debug --debug` 可以用来调试，会打印出 stack trace。 |
| gitbook pdf .                               | 发布到pdf文件（需先安装 npm install gitbook-pdf -g）         |



其他可参考：

https://github.com/tolaravel/gitbook-doc

https://einverne.github.io/gitbook-tutorial/plugins/hightlight.html