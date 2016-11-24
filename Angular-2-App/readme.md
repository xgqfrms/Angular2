# Angular 2 App (typescript)

[https://school.scotch.io/getting-started-with-angular-2/introduction](https://school.scotch.io/getting-started-with-angular-2/introduction)

[BootstrapCDN: Bootswatch](https://www.bootstrapcdn.com/bootswatch/)  
The recommended CDN for Bootstrap, Font Awesome and Bootswatch.

## Goals

> Build an Angular 2 app  
  Create an Angular 2 starter kit  
  Understand what goes into setting up Angular 2 

## steps

```sh
$ npm install -g angular-cli

$ npm install --save-dev angular-cli
$ npm install --save angular-cli

$ ng new my-new-app

$ cd my-new-app

$ ng start
``` 
## dir
app
....app.component.ts
....app.module.ts
....main.ts
systemjs.config.js
tsconfig.json
typings.json
package.json
index.html
README.md
.gitignore
typings
....globals
........core-js
............typings.json
............index.d.ts
........jasmine
............typings.json
............index.d.ts
........node
............typings.json
............index.d.ts
....index.d.ts
## output 
dist
....
....
....

## app start

$ npm init
npm install -g angular-cli

$ npm install --save angular-cli
$ npm install --save gulp

$ npm install --save lite-server


```json
//package.json
// json注释error

"scripts": {
    "lite": "lite-server"
  },
``` 
$ npm run lite

## TypeScript
[https://www.typescriptlang.org/](https://www.typescriptlang.org/) 
[https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript) 
### INSTALLnpm  
$ install -g typescript 

### COMPILEtsc   
$ helloworld.ts  
[TypeScript demos](http://www.typescriptlang.org/samples/index.html) 
[Samples for TypeScript](https://github.com/xgqfrms-GitHub/TypeScriptSamples)
[tutorial : Quick start](http://www.typescriptlang.org/docs/tutorial.html) 
[Playground](http://www.typescriptlang.org/play/index.html)

The TypeScript Definition Manager : [typings](https://github.com/typings/typings)  

npm install --save-dev typescript typings

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
``` 

### typings.json
```json
{
  "globalDependencies": {
    "core-js": "registry:dt/core-js#0.0.0+20160725163759",
    "jasmine": "registry:dt/jasmine#2.2.0+20160621224255",
    "node": "registry:dt/node#6.0.0+20160818175514"
  }
}
``` 
##  concurrently
run both lite-server and our TypeScript watcher at the same time. 

npm install --save-dev concurrently

### package.json
```json
"scripts": {
  "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
  "lite": "lite-server",
  "tsc": "tsc",
  "tsc:w": "tsc -w",
  "typings": "typings",
  "postinstall": "typings install"
},
``` 





### Bootswatch
link(href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css", rel="stylesheet", integrity="sha384-+ENW/yibaokMnme+vBLnHMphUYxHs34h9lpdbSLuAwGkOKFRl4C34WkjazBtb7eT", crossorigin="anonymous")

<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-+ENW/yibaokMnme+vBLnHMphUYxHs34h9lpdbSLuAwGkOKFRl4C34WkjazBtb7eT" crossorigin="anonymous">


https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css


index.html 
(gulp src/template/index.jade)
(gulp builds/develoment/index.html)
(gulp dist/index.html)








# go on

https://school.scotch.io/getting-started-with-angular-2/

https://school.scotch.io/getting-started-with-angular-2/typescript-setup?autoplay=true&fullscreen=true


http://www.imooc.com/video/11055

http://www.imooc.com/u/1947949/courses?sort=publish

CSS3扁平化博客

http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html


http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

https://github.com/petehunt/react-howto/blob/master/README-zh.md

https://github.com/ZevenFang/react-native-redux-zhihudaily