# Quickstart - ts - Angular 2.1.1 (2016.11.10)

https://angular.io/docs/ts/latest/quickstart.html

https://angular.io/docs/ts/latest/tutorial/


## docs

https://angular.io/docs/ts/latest/

https://angular.io/docs/ts/latest/guide/

https://angular.io/docs/ts/latest/guide/style-guide.html

https://angular.io/docs/ts/latest/guide/change-log.html

https://angular.io/docs/ts/latest/guide/architecture.html

## API

https://angular.io/docs/ts/latest/api/


## guide

https://angular.io/docs/ts/latest/guide/ngmodule.html

## Angular Cookbook

https://angular.io/docs/ts/latest/cookbook/


## 事件 我们在哪里？

https://angular.io/events.html


Google Developer Day China (Shanghai)   Shanghai, China Dec. 14, 2016


http://www.google.cn/intl/en/events/developerday2016/


**********************************************************************************************************
**********************************************************************************************************

## config the typescript compiler path to 'app/dist' ???

> tsconfig.json

```json
"outDir": "./app/dist"

or

"outDir": "app/dist"

``` 
> 

## root === 'AngularJS-2-APP'


"rootDir": "./",
"project": "./",
"listFiles": false,
"declaration": false,
"suppressImplicitAnyIndexErrors": true,
"preserveConstEnums": true,
"inlineSources": false


# 架构概览

通过使用Angularized标记编写HTML模板，编写组件类来管理这些模板，在服务中添加应用程序逻辑，以及在模块中装箱组件和服务来编写Angular应用程序。

架构图标识了Angular应用程序的八个主要构建块：

模块 (Modules)

组件 (Components)

模板 (Templates)

元数据 (Metadata)

数据绑定 (Data Binding)

指令 (Directives)

服务 (Services)

依赖注入 (Dependency Injection)




*****************************************************************************************

# 预编译器（AOT）

这个烹饪指南描述如何通过在构建过程中进行预编译（ Ahead of Time - AoT ）来从根本上提升性能。

https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html


## 运行

```sh
# ngc 参数 === tsc 参数 
$ "node_modules/.bin/ngc" -p tsconfig-aot.json
``` 








