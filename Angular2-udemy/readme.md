# Angular2-Udemy

https://www.udemy.com/ultimate-angular-2/

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



