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




