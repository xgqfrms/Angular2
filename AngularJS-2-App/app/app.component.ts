import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular 2 & the latest version 2.1.1 relased!</h1>'
})
export class AppComponent { }

//view

/*
https://angular.cn/docs/ts/latest/guide/architecture.html

组件 :

负责控制屏幕上的一小块地方，我们称之为 视图 。

你定义一个组件的应用程序逻辑 -它用来支持视图 - 在类的内部。类通过属性和方法组成的API与视图交互。


当用户在这个应用中“移动”时， Angular 会创建、更新和销毁组件。

你的应用程序可以在这个生命周期的每一时刻采取行动,通过可选的生命周期钩子, 如上面声明的ngOnInit()。

https://angular.cn/docs/ts/latest/guide/lifecycle-hooks.html


*/

/*
模板 :

使用其(组件)自带的模板定义一个组件的视图. 模板是一种 HTML的形式，告诉Angular如何渲染组件。

模板看起来像常规HTML，除了一些差异。

虽然此模板使用典型的HTML元素，如<h2>和<p>，但它也有一些差异。

像* ngFor，{{hero.name}}，(click)，[hero]和<hero-detail>等代码使用Angular的模板语法。

在模板的最后一行，<hero-detail>标签是一个自定义元素，表示一个新的组件，HeroDetailComponent.

https://angular.cn/docs/ts/latest/guide/template-syntax.html

HeroDetailComponent 跟以前见到过的 HeroListComponent 是不同的组件。 
HeroDetailComponent( 未展示代码 ) 用于展现一个特定英雄的情况，这个英雄是用户从 HeroListComponent 列表中选择的。
HeroDetailComponent 是 HeroListComponent 的子组件 。

请注意<hero-detail>如何轻松地在原生HTML元素中休息。自定义组件与原生HTML在同一布局中无缝组合。


*/