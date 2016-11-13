# run

# c9.io
https://angularjs-xgqfrms.c9users.io/


# Angular 2, Browser support

https://angular.io/docs/ts/latest/guide/browser-support.html

https://github.com/xgqfrms-GitHub/webgeeker/blob/gh-pages/Angular2/Browser%20support.md


# Easy Angular Authentication with JSON Web Tokens

https://blog.angularjs.org/

## old
tsc -p tsconfig.json

"node_modules/.bin/rollup" -c rollup-config.js

npm run lite 



# step1 
$ "node_modules/.bin/ngc" -p tsconfig-aot.json

# ??? main.ts
> import { AppModuleNgFactory } from '../AoT/app/app.module.ngfactory';

# -p ???.json
$ tsc -p tsconfig.json

# step2 
$ "node_modules/.bin/rollup" -c rollup-config.js

> <script src="./dist/build.js"></script>

# step3 
$ npm run lite 









## complier ts->js

```sh
$ npm start

# *.josn
$ tsc

# -p ???.json
$ tsc -p tsconfig.json

$ "node_modules/.bin/ngc" -p tsconfig-aot.json

import { AppModuleNgFactory } from '../AoT/app/app.module.ngfactory';



# -w watch
$ tsc -w -p tsconfig.json


$ npm run lite 
<!-- $ npm lite & tsc -p tsconfig.json -->
``` 


"start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"


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

## <script src="./dist/build.js"></script>


