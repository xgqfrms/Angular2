# Build a Material Design App with Angular 2

https://www.youtube.com/watch?v=hHhwg-VJxw8

https://github.com/xgqfrms007/angular-cli



```sh
$ npm install -g angular-cli

# Usage

$ ng --help

$ ng new PROJECT_NAME

$ cd PROJECT_NAME

$ ng serve

```

    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,


https://github.com/ufo-github/angular-cli#installation

生成组件，指令，管道和服务

你可以使用 ng generate (或只是 ng g) 命令生成 Angular 组件:

```bash
ng generate component my-new-component

ng g component my-new-component 

# using the alias

# 组件支持相对路径生成

# 如果在目录中 src/app/feature/ 你运行
ng g component new-cmp
# 你的组件将生成在 src/app/feature/new-cmp
# 但如果你要运行
ng g component ../newer-cmp
# 你的组件将生成在 src/app/newer-cmp
``` 



$ ng g component dialog_component 




*************************************************************************************

# https://github.com/xgqfrms-GitHub/material2/blob/master/GETTING_STARTED.md



## OK 

```bash
$ npm install --save @angular/material

$ npm i -S @angular/material
```


# ??? Error ???

```bash
# [Build a Material Design App with Angular 2](https://www.youtube.com/watch?v=hHhwg-VJxw8&gl=KR)

npm i -S @angular2-material/core @angular2-material/button @angular2-material/core @angular2-material/card

npm i -S @angular2-material{core,button,card,checkbox,icon,input,list,toolbar}@2.0.0-alpha.10

``` 


## demo

https://material2-app.firebaseapp.com/

https://github.com/xgqfrms-GitHub/material2



## 包括核心和主题样式 :

这是必需，以应用所有的核心和主题样式到您的应用程序。
要么你可以使用一个预构建的主题，要么定义自己的自定义主题。

https://github.com/xgqfrms-GitHub/material2/blob/master/docs/theming.md

在Angular Material 2中, 所有主题样式都是在构建时生成statically，以便你的应用程序不必在启动时花费周期生成主题样式。

## 使用一个预构建的主题


你可以直接将主题文件包含到你的应用程序中,从

@angular/material/core/theming/prebuilt

如果你在使用 Angular CLI, 这就像在你的style.css文件中,包含一行一样简单 ：

@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
或者，你可以直接引用文件。 这看起来会像


<link href="node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css" rel="stylesheet">
实际路径将取决于您的服务器设置。

你还可以将文件与你的应用程序的的其余部分css文件连接。





##[可选的] 使用 Material Design 的图标 md-icon:

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">









