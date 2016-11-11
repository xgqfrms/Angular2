"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// controle
/*
https://angular.cn/docs/ts/latest/guide/architecture.html

Angular 应用是模块化的，并且 Angular 有自己的模块系统，它被称为 Angular 模块 或 NgModules 。

每个 Angular 应用至少有一个模块（ 根模块 ），习惯上命名为 AppModule 。


NgModule 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：

declarations （声明） - 本模块中拥有的视图类。

Angular 有三种视图类： 组件 、 指令 和 管道 。

exports - 声明（ declaration ）的子集，它可用于其它模块中的组件 模板 。

imports - 本 模块组件模板中需要由其它模块导出的类。

providers - 服务 的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。

bootstrap - 标识出应用的主视图（被称为 根组件 ），它是所有其它视图的宿主。只有 根模块 才能设置 bootstrap 属性。


AppComponent的 export只是为了说明如何导出;在该示例中实际上不是必需的。

根模块没有理由导出任何内容，因为其他组件不需要导入根模块。

模块库

Angular 发布了一组 JavaScript 模块。我们可以把它们看做库模块。

每个 Angular 库的名字都带有 @angular 前缀。

我们可以用 npm 包管理工具安装它们，并且用 JavaScript 的 import 语句导入它们的某些部件。

比如，我们从 @angular/core 库中导入 Component 装饰器，就像这样：

import { Component } from '@angular/core';

我们还使用 JavaScript 的导入语句从 Angular 库 中导入 Angular 的 某些模块 。

import { BrowserModule } from '@angular/platform-browser';

在上面这个关于根模块的小例子中，应用模块需要来自 BrowserModule 的某些素材。要访问这些素材，我们就得把它加入 @NgModule 元数据的 imports 中去，就像这样：

imports:      [ BrowserModule ],


这两个系统比较容易混淆，因为它们共享相同的词汇（“ imports ”和“ exports ”）。
先放一放，随着时间和经验的增长，自然就会澄清了

https://angular.cn/docs/ts/latest/guide/ngmodule.html

*/ 
//# sourceMappingURL=app.module.js.map