# run

## complier ts->js

```sh
$ npm start
``` 




## aot

```sh
/*
以QuickStart为起点。对单独的app.component的一些小的更改： (AoT (app/app.component.ts & pages/app.component.html))

改变应用的引导方式 (AoT (app/main.ts))
*/
# ngc 参数 === tsc 参数 

# windows "node_modules/.bin/ngc"
$ "node_modules/.bin/ngc" -p tsconfig-aot.json
``` 

## 运行 Rollup

> 通过下列命令执行 Rollup 过程：

```sh
# windows "node_modules/.bin/rollup"
$ "node_modules/.bin/rollup" -c rollup-config.js
``` 




