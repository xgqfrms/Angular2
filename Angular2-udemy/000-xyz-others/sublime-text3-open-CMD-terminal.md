# windows CMD terminal setting for sublime text 3!

```json

{
    "terminal": "C:\\Windows\\System32\\cmd.exe",
    "start": ["/START", "%CWD%"],
    "title": ["/TITLE", "Hacker's Bash"],
    "keys": ["ctrl+shift+t"],
    "command": "open_terminal"
}

``` 

***************************************************************************************************
***************************************************************************************************


# terminal for sublime text 3

https://packagecontrol.io/packages/Terminal

https://gist.github.com/xgqfrms-GitHub/f9273addd6c9f9d4a9556be6a4886161  



## CMD on Windows

```json
{
    "terminal": "C:\\Windows\\System32\\cmd.exe",
    "parameters": ["/START", "%CWD%"]
}
``` 

## Custom Parameters

> Preferences > Package Settings > Terminal > Settings – Default  


```json
[
    { "keys": ["ctrl+shift+t"], "command": "open_terminal" },
    { "keys": ["ctrl+shift+alt+t"], "command": "open_terminal_project_folder" }
]
``` 



> Preferences > Package Settings > Terminal > Settings – User  




## terminal.sublime-settings

```json
{
    "terminal": "C:\\Windows\\System32\\cmd.exe",
    "parameters": ["/START", "%CWD%"],
    "keys": ["ctrl+shift+t"],
    "command": "open_terminal",
    "args": {
        "parameters": ["-T", "Working in directory %CWD%"]
    }
}

## or

{
    "terminal": "C:\\Windows\\System32\\cmd.exe",
    "parameters": ["/START", "%CWD%"],
    "keys": ["ctrl+shift+t"],
    "command": "open_terminal_project_folder",
    "args": {
        "parameters": ["-T", "Working in directory %CWD%"]
    }
}
``` 


