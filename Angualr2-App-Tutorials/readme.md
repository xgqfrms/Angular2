# Angualr2 App Tuturials 

> (offical docs learning notes)

> G:\wwwRoot\AngularJS\AngularJS-2-App\Tutorials  


## QuickStart  

### components  

Angular applications are made of components.  
A component is the combination of an HTML template and a component class that controls a portion of the screen.  

### decorator  
> https://angular.io/docs/ts/latest/glossary.html#decorator

Every component begins with a @Component decorator function that takes a metadata object.  
The metadata object describes how the HTML template and component class work together.

he selector property tells Angular to display the component inside a custom &lt;my-app&gt; tag in the index.html.

index.html (inside &lt;body&gt;)

### interpolation binding  (插值绑定表达式 )  
> https://angular.io/docs/ts/latest/guide/displaying-data.html

The template property defines a message inside an &lt;h1&gt; header.  
The message starts with "Hello" and ends with {{name}} which is an Angular interpolation binding expression.  
At runtime, Angular replaces {{name}} with the value of the component's name property.


## Setup a local development environment (设置本地开发环境)  
> [设置解剖](https://angular.io/docs/ts/latest/guide/setup-systemjs-anatomy.html)

app  
    app.component.ts  
    app.module.ts  
    main.ts  

### app.component.ts (根组件)  

Defines the same AppComponent as the one in the QuickStart playground. It is the root component of what will become a tree of nested components as the application evolves.


### app.module.ts (根模块)  
> https://angular.io/docs/ts/latest/guide/appmodule.html

Defines AppModule, the root module that tells Angular how to assemble the application.  
Right now it declares only the AppComponent. Soon there will be more components to declare.


### main.ts (使用JiT编译器编译应用程序并引导应用程序在浏览器中运行。)  
> https://angular.io/docs/ts/latest/glossary.html#jit  
> https://angular.io/docs/ts/latest/guide/appmodule.html#main  

Compiles the application with the JiT compiler and bootstraps the application to run in the browser.  
That's a reasonable choice for the development of most projects and it's the only viable choice for a sample running in a live-coding environment like Plunker.  
You'll learn about alternative compiling and deployment options later in the documentation.


## LEARNING ANGULAR  (文档的建议路径, Angular新手)  

> https://angular.io/docs/ts/latest/guide/learning-angular.html  


### Tour of Heroes tutorial  
> https://angular.io/docs/ts/latest/tutorial/  


The Tour of Heroes takes you step-by-step from setup to a full-featured example that demonstrates the essential characteristics of a professional application: a sensible project structure, data binding, master/detail, services, dependency injection, navigation, and remote data access.

### Architecture  
> https://angular.io/docs/ts/latest/guide/architecture.html  

Read the Architecture overview for the big picture.

### Root Module  
> https://angular.io/docs/ts/latest/guide/appmodule.html  

The Root Module introduces the NgModule class that tells Angular how to compile and run your application.

### Displaying Data  
> https://angular.io/docs/ts/latest/guide/displaying-data.html  

Displaying Data shows how data binding puts component property values on screen.

### User Input  
> https://angular.io/docs/ts/latest/guide/user-input.html  

User Input explains how to respond to user-initiated DOM events.

### Forms  
> https://angular.io/docs/ts/latest/guide/forms.html  

Forms covers data entry and validation within the UI.


### Dependency Injection  
> https://angular.io/docs/ts/latest/guide/dependency-injection.html  

Dependency Injection is the way to build large, maintainable applications from small, single-purpose parts.

### Template Syntax  
> https://angular.io/docs/ts/latest/guide/template-syntax.html  

Template Syntax is a comprehensive study of Angular template HTML.


After reading the above sections, feel free to skip around among the other pages on this site.









## Convert TypeScript codes into ES6 and ES5 JavaScript

> https://angular.io/docs/ts/latest/cookbook/ts-to-js.html  




## path (tsconfig.json & systemjs.config.js)

G:\wwwRoot\AngularJS\AngularJS-2-App

"outDir": "dist"

main: '../dist/main.js',








