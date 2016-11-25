# TUTORIAL: TOUR OF HEROES

> https://angular.io/docs/ts/latest/tutorial/  


## THE HERO EDITOR

https://github.com/angular/quickstart/tree/master/app
https://github.com/angular/universal-starter

angular-tour-of-heroes
    app
        app.component.ts
        app.module.ts
    main.ts
    node_modules ...
    index.html
    package.json
    styles.css
    systemjs.config.js
    tsconfig.json

```sh
$ mkdir app
$ touch app/app.component.ts app/app.module.ts app/main.ts
$ touch index.html package.json styles.css systemjs.config.js tsconfig.json
```  


## CLI

```sh
$ ng new angular2-heros
$ cd angular2-heros
$ npm i
``` 

# Keep the app transpiling and running

```sh
$ npm start
``` 


## Displaying Data  

> https://angular.io/docs/ts/latest/guide/displaying-data.html  


## double curly braces (双大括号)  

This is the "interpolation" form of one-way data binding.  
这是单向数据绑定的“插值”形式。  


## template strings (ES 6 模板字符串)  

Multi-line template strings  
多行模板字符串  


## Two-Way Binding  


FormsModule ( form inputs )  

> https://angular.io/docs/ts/latest/guide/forms.html#ngModel  

> https://angular.io/docs/ts/latest/guide/template-syntax.html#ngModel  



## MASTER/DETAIL


> https://angular.io/docs/ts/latest/tutorial/toh-pt2.html  

### <li *ngFor="let hero of heroes">  

> https://angular.io/docs/ts/latest/guide/displaying-data.html#ngFor  
> https://angular.io/docs/ts/latest/guide/template-syntax.html#ngFor  

## Metadata Properties: (元数据属性)  

### templateUrl & styleUrls  

> https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html  

> https://github.com/angular/angular/blob/2.2.2/modules/%40angular/core/src/metadata/directives.ts#L694-L715  

```ts
templateUrl?: string;

/**
* Specifies an inline template for an Angular component.
*
* Only one of `templateUrl` or `template` can be defined per Component.
*/
template?: string;

/**
* Specifies stylesheet URLs for an Angular component.
*/
styleUrls?: string[];

/**
* Specifies inline stylesheets for an Angular component.
*/
styles?: string[];
``` 


## Click event

> This UI pattern is widely known as "master-detail".  

```code
(click)="onSelect(hero)

<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
``` 

## import { Hero_New } from './classes/hero.class';



## 构造函数  
> https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor  


```js
# 可能看起来不像类有属性，但它是。  
# 构造函数参数的声明利用了TypeScript快捷方式。  

export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}

# public id: number,
# 这个简短的语法做了很多：  
    声明一个构造函数参数及其类型。  
    声明一个同名的公共属性。  
    在创建一个类的实例时，使用相应的参数初始化该属性。  






# 变量初始化  
# 这个程序使用更简洁的“变量赋值”样式简单的简洁。  
> https://angular.io/docs/ts/latest/guide/displaying-data.html#!#ngFor  
# 类,声明属性  

export class AppCtorComponent {
    title: string;
    myHero: string;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }
}
``` 


## 使用Hero类  

```
# 使用Hero类  

import { Hero } from './classes/hero';

heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];

myHero = this.heroes[0];

```


## Conditional display with NgIf  


```code
<p *ngIf="heroes.length > 3">There are many heroes!</p>
``` 

## 双引号内的模板表达式 (*ngIf="heroes.length > 3")，外观和行为与TypeScript非常相似。

Angular不显示和隐藏消息。  
它是从DOM添加和删除段元素。  
这提高了性能，特别是在有条件地包括或排除大块的HTML与大量数据绑定的大型项目。  

# ??? DOM tree render ???  

> https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn  

DOM 树与 CSSOM 树融合成渲染树.








