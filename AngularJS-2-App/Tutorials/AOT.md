# 预编译器（AOT）

这个烹饪指南描述如何通过在构建过程中进行预编译（ Ahead of Time - AoT ）来从根本上提升性能。

https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html



## 使用以下命令安装几个新的npm依赖项：

```sh
$ npm i -S @angular/compiler-cli @angular/platform-server 

``` 
你将运行@angular/compiler-cli npm包中提供的ngc编译器，而不是TypeScript编译器（tsc）。

ngc是tsc的替代，并且配置方式大致相同。

ngc需要自己的tsconfig.json和面向AoT的设置。

将原始tsconfig.json复制到名为tsconfig-aot.json的文件，然后将其修改为如下所示。

## tsconfig-aot.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
  },

  "files": [
    "app/app.module.ts",
    "app/main.ts"
  ],

  "angularCompilerOptions": {
   "genDir": "aot",
   "skipMetadataEmit" : true
 }
}

``` 








## 预编译（ AoT ） vs 即时编译（ JiT ）

事实上只有一个 Angular 编译器， AoT 和 JiT 之间的差别仅仅在于编译的时机和所用的工具。 
使用 AoT ，编译器仅仅使用一组库在构建期间运行一次；
使用 JiT ，编译器在每个用户的每次运行期间都要用不同的库运行一次。


你可以在浏览器中使用 即时编译器 Just-in-Time (JiT) 在运行期间编译该应用，也就是在应用加载时。 这是本文档中展示过的标准开发方式。

编译可以发现许多组件模板绑定错误。 JiT编译在运行时发现它们比我们想要的晚。

Ahead-of-Time (AoT) 预编译器, 可以捕获早期模板错误，并通过在构建时编译来提高性能，您将在本章中学习。


为什么需要 AoT 编译？

> 渲染得更快

使用 AoT ，浏览器下载预编译版本的应用程序。 浏览器直接加载运行代码，所以它可以立即渲染该应用，而不用等应用完成首次编译。

> 需要的异步请求更少

编译器把外部 html 模板和 css 样式表内联到了该应用的 JavaScript 中。 消除了用来下载那些源文件的 Ajax 请求。

> 需要下载的 Angular 框架体积更小

如果应用已经编译过了，自然不需要再下载 Angular 编译器了。 该编译器差不多占了 Angular 自身体积的一半儿，所以，省略它可以显著减小应用的体积。

> 提早检测模板错误

AoT 编译器在构建过程中检测和报告模板绑定错误，避免用户遇到这些错误。

> 更安全

AoT 编译远在 HTML 模版和组件被服务到客户端之前，将它们编译到 JavaScript 文件。 没有模版可以阅读，没有高风险客户端 HTML 或 JavaScript 可利用，所以注入攻击的机会较少。


