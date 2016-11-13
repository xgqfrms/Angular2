# 预编译器（AOT）

这个烹饪指南描述如何通过在构建过程中进行预编译（ Ahead of Time - AoT ）来从根本上提升性能。

https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html




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


## 编译该应用

在命令行中执行下列命令，借助刚安装好的 ngc 编译器来启动 AoT 编译：  

```sh

$ "node_modules/.bin/ngc" -p tsconfig-aot.json

``` 




## 以QuickStart为起点。对单独的app.component的一些小的更改导致这两个类和html文件：

> (AoT (app/app.component.ts & pages/app.component.html))


```sh
# app.component.html
<button (click)="toggleHeading()">Toggle Heading</button>
<h1 *ngIf="showHeading">My First Angular App</h1>

<h3>List of Heroes</h3>
<div *ngFor="let hero of heroes">{{hero}}</div>

``` 

```sh
# app.component.html
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}

``` 




## 引导

> (AoT (app/main.ts))

AoT 也改变了应用的引导方式。

引导的方式从引导 AppModule 改成了引导生成的模块工厂： AppModuleNgFactory 。

从使用 JiT 编译时的 platformBrowserDynamic.bootstrap 换成了 platformBrowser().bootstrapModuleFactory ，并把 AppModuleNgFactory 传进去。

这里是 AoT 版本 main.ts 中的引导过程，下一个是你所熟悉的 JiT 版本。

## 引导方式

```sh
# JiT (app/main.ts)

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/*
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
*/

***************************************************************************************
# AoT (app/main.ts)

import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

/*
const platform = platformBrowser();

platform.bootstrapModule(AppModule);
*/


``` 










## 树摇晃（ Tree Shaking ）

AoT 编译为接下来通过一个叫做 摇树优化 的过程做好了准备。 
摇树优化器从上到下遍历依赖图谱，并且 摇掉 用不到的代码，这些代码就像是圣诞树中那些死掉的松针一样。


Rollup
这个烹饪宝典中用来示范的摇树优化工具是 Rollup 。

Rollup 会通过跟踪 import 和 export 语句来对本应用进行静态分析。 
它所生成的最终代码 捆 中会排除那些被导出过但又从未被导入的代码。

Rollup 只能对 ES2015 模块摇树，因为那里有 import 和 export 语句。

> 安装 Rollup

```sh
$ npm i -D rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify
``` 

在项目根目录新建一个配置文件（ rollup-config.js ），来告诉 Rollup 如何处理应用.













