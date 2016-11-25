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








