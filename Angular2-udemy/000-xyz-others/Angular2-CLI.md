# Angular2 

## NgModule 

{
    declarations=Directives(Components)

    imports=Modules(Routing) 

    providers=Services

    bootstrap=AppComponent(root views)
}

## typescript class & interface

ng g class my-new-class  

ng g interface my-new-interface  



https://github.com/angular/angular-cli#webpack-update


## ng g ???

Scaffold	Usage  

Component	ng g component my-new-component  

Directive	ng g directive my-new-directive  

Pipe	ng g pipe my-new-pipe  

Service	ng g service my-new-service  

Class	ng g class my-new-class  

Interface	ng g interface my-new-interface  

Enum	ng g enum my-new-enum  

Module	ng g module my-module  



???

vscode multi-points edit

1. alt + click

2. alt + ctrl + up/down

3. keybindings : ctrl + click (??? it doesn't work!)

http://stackoverflow.com/questions/30037808/multiline-editing-in-vscode/40964440#40964440



# vs Multi Edit Mode

https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MultiEditMode

## search (insertCursor)

```json
{ "key": "ctrl+alt+up",           "command": "editor.action.insertCursorAbove",
                                     "when": "editorTextFocus" },
{ "key": "shift+alt+i",           "command": "editor.action.insertCursorAtEndOfEachLineSelected",
                                     "when": "editorTextFocus" },
{ "key": "ctrl+alt+down",         "command": "editor.action.insertCursorBelow",
                                     "when": "editorTextFocus" },

``` 

***********************************************************************

# Angular2 CLI  

## build production  
```sh
$ ng build --prop

``` 

## run server & open chrome  
```sh
$ ng server --open

``` 

## express static server for Angular2 App(dist)  

https://gist.github.com/xgqfrms-GitHub/7175a873cd6eed5f6b6baa4b068d03d2  

https://gist.github.com/xgqfrms-GitHub  

https://gist.github.com/xgqfrms-GitHub/6e1554b5d73f4774dd338dd871611076

https://console.firebase.google.com/project/angular2-88ac6/hosting  

https://ide.c9.io/xgqfrms/angular2  

## npm packages

> process.env.PORT || 4200, process.env.IP || "127.0.0.1"

```sh
$ npm i -D express
$ npm i -D async
$ npm i -D socket.io

``` 








