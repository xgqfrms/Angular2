# Angular2-Udemy

https://www.udemy.com/ultimate-angular-2/


## AOT 


$ ng build --prod --aot

https://www.youtube.com/watch?v=nxMCBKpRC60  


## Material Design Angular 2  

https://www.youtube.com/watch?v=sRSnftoUpxg  




## browser-sync  

```sh
$ browser-sync start --server --files "./*.*"

``` 
******************************************************************************************
# install & create & run ng2app

```sh
$ npm i -g angular-cli
$ ng new Angular2-App
$ cd Angular2-App
$ ng server
``` 

## angular 2 version  
(v 2.2.1 -> v 2.4.1)  
2016-11-17 ->  2016-12-22  

??? ( v 4.0.0-beta.1)

https://angular.io  
https://github.com/angular/angular/tags  

```package.json
"dependencies": {
    "@angular/common": "2.2.1",
    "@angular/compiler": "2.2.1",
    "@angular/core": "2.2.1",
    "@angular/forms": "2.2.1",
    "@angular/http": "2.2.1",
    "@angular/platform-browser": "2.2.1",
    "@angular/platform-browser-dynamic": "2.2.1",
    "@angular/router": "3.2.1",
    "core-js": "^2.4.1",
    "rxjs": "5.0.0-beta.12",
    "ts-helpers": "^1.1.1",
    "zone.js": "^0.6.23"
}
``` 





## ng -v (v1.0.0-beta.21 -> v1.0.0-beta.24)  
https://github.com/angular/angular-cli/tags  

```sh
$ ng version
$ ng --version
$ ng -v
$ ng v
$ npm i -g angular-cli 
``` 

## tsc -v (2.0.10 -> 2.1.4)  
https://github.com/Microsoft/TypeScript/tags  

```sh
$ tsc -v
$ npm i -g typescript 
``` 

******************************************************************************************

## update CLI 1.0.0.beta22 

```sh
$ npm i -g angular-cli@v1.0.0-beta.22

$ ng new app
# very slowly , just waiting for it install all mpackages!

$ cd app
# open app folder path

## test version (./src)
$ ng server

# why not show the localhost://4200 in the terminal? 
# browser-sync for (./dist)
$ browser-sync start --server

## publish development version (./dist)
$ ng build

## publish production version (./dist)  
## (./angular-cli.json & ./src/environments/environment.prod.ts)
$ ng build --env=prod

``` 


## CLI

```sh
$ ng g component test.component.ts

$ ng g directive test.directive.ts

$ ng g service test.service.ts

$ ng g route test.route.ts

$ ng g pipe test.pipe.ts

# 输出 angular­cli, node和操作系统的版本。

$ ng version
# 别名:
$ ng -v
$ ng ­v

``` 

## The goal of tools should be easy using & save time !

https://github.com/angular/angular-cli/issues/3376

> why not show the localhost://4200 in the terminal? 



```sh
$ browser-sync start --server

$ browser-sync start --server --files "./*.*"

``` 

https://xgqfrms.github.io/vue/App-Native/index.html


http://www.typescriptlang.org/play/

## Sublime Text Keymap

https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings  

https://code.visualstudio.com/docs/customization/keybindings  


## .vscode (setting.json)

```json
{
    "typescript.check.tscVersion": false,
    "typescript.check.workspaceVersion": false,
    "typescript.tsdk": "./ng2-app/node_modules/typescript/lib",
}
```

> show version ???

After setting typescript.tsdk, restart VS Code 
and the TypeScript version will be shown in the bottom right of the Status Bar 
when you open a JavaScript or TypeScript file.


## What's new in TypeScript (TypeScript 2.1)

https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#typescript-20


## ng2-app (2.0.3)
https://github.com/Microsoft/TypeScript/releases/tag/v2.0.3


## tsc -v (2.0.10 -> 2.1.4)  
https://github.com/Microsoft/TypeScript/tags  

```sh
$ tsc -v

$ npm install -g typescript 

$ npm i -g typescript 
``` 



http://www.typescriptlang.org/docs/tutorial.html  

http://www.typescriptlang.org/#download-links  

https://github.com/xgqfrms-GitHub/webgeeker/projects/new

my first projects !

GitHub & Projects management!


## udemy ng2 course

> https://www.udemy.com/angular-2-crash-course


## Angular2-Course-Project-source-files-locations

The course project application source is located in 2 different GitHub repos.

The course Starter Kit is the initial download and provides the shell files for beginning the coding exercises in the course.
The course Starter Kit is located here:

> https://github.com/AlohaCode/StartingWithAngular2

This repo is intended to be cloned when setting up a C9 workspace in the 2nd section of the course.

-----------------------------------------------------

The completed project is located here:

> https://github.com/AlohaCode/StartingWithAngular2-CompletedProject

This repo can be cloned in a new C9 workspace (other than the one set up in the course) and can be run & observed independently of the course project workspace.  Be sure to use a unique workspace name to differentiate from the Starter Kit workspace.



https://www.youtube.com/watch?v=mvzNHxxjC2w  


## bootstrapv3

https://www.youtube.com/watch?v=I4TD-LXq2sY&feature=youtu.be 

(21:29 / 33:37)

$ npm i -S bootstrap 

## Import 

> ng-cli.json  (src relative path ../ & ./)  

```codes 
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
``` 


## material design???

https://material.angular.io/guide/getting-started  
https://material2-app.firebaseapp.com/  

https://github.com/angular/material2/issues/2386  


$ npm i -S @angular/material

## Import the Angular Material NgModule

> src/app/app.module.ts  

```codes
import { MaterialModule } from '@angular/material';
// other imports 
@NgModule({
  imports: [MaterialModule.forRoot(), ...],
  ...
})
``` 


```icons 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
``` 


## 
http://hammerjs.github.io/  
https://www.npmjs.com/package/hammerjs  


> md-slide-toggle & md-slider:  

## The slide-toggle and slider components have a dependency on HammerJS.

Add HammerJS to your application via npm, a CDN , or served directly from your app.

If you want to include HammerJS from npm, you can install it:

$ npm install --save hammerjs 
$ npm install --save-dev @types/hammerjs

$ npm i -S hammerjs 
$ npm i -D @types/hammerjs

## Import HammerJS on your app's module.

> src/app/app.module.ts  

```codes 
import 'hammerjs';

> Finally, you need to add hammerjs to the types section of your tsconfig.json file:

{
  "compilerOptions": {
    "types": [
      "hammerjs"
    ]
  }
}
``` 




















