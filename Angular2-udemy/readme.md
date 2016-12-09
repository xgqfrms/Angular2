# Angular2-Udemy

https://www.udemy.com/ultimate-angular-2/


******************************************************************************************
# install & create & run ng2app

```sh
$ npm i -g angular-cli
$ ng new Angular2-App
$ cd Angular2-App
$ ng server
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
$ ng v
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


## tsc -v (2.0.10)

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
































