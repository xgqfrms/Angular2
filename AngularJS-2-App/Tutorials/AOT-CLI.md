# 预编译器（AOT）

这个烹饪指南描述如何通过在构建过程中进行预编译（ Ahead of Time - AoT ）来从根本上提升性能。

https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html


## 运行

```sh
# ngc 参数 === tsc 参数 
$ "node_modules/.bin/ngc" -p tsconfig-aot.json
``` 

> ngc是tsc的替代，并且配置方式大致相同。
  你将会运行@angular/compiler-cli npm包中提供的ngc编译器，而不是TypeScript编译器（tsc）。
  ngc需要自己的tsconfig.json和面向AoT的设置。
  将原始tsconfig.json复制到名为tsconfig-aot.json的文件，然后将其修改为如下所示。

## Typescript 参数

https://www.typescriptlang.org/docs/handbook/compiler-options.html

```bash
--project 
-p  string  编译给定有效配置文件的项目。

            参数可以是指向有效JSON配置文件的文件路径，也可以是指向包含tsconfig.json文件的目录的目录路径。
            有关更多详细信息，请参阅tsconfig.json文档。

--target
-t  string  "ES3"   指定ECMAScript目标版本: 'es3' （默认）, 'es5', 或 'es6'.

--version
-v          打印编译器的版本。

--watch
-w          在监视模式下运行编译器。观察输入文件并触发对更改的重新编译。

``` 



