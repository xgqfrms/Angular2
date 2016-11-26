# Angular2 App (scotch.io)

https://school.scotch.io/getting-started-with-angular-2/

http://embed.plnkr.co/V5tKs3/


## package.json
```code
$ npm i -S @angular/ ???

$ npm i -S @angular/material
$ npm i -D @angular/material

$ npm i -S core-js reflect-metadata rxjs systemjs zone.js
$ npm i -D concurrently lite-server typescript typings


"devDependencies": {
    "concurrently": "^3.0.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.3",
    "typings": "^1.4.0"
  },
  "dependencies": {
    "@angular/common": "~2.1.1",
    "@angular/compiler": "~2.1.1",
    "@angular/core": "~2.1.1",
    
    "@angular/platform-browser": "~2.1.1",
    "@angular/platform-browser-dynamic": "~2.1.1",

    "@angular/forms": "~2.1.1",
    "@angular/http": "~2.1.1",
    "@angular/router": "~3.1.1",
    "@angular/upgrade": "~2.1.1",

    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.39",
    "zone.js": "^0.6.25"
  }

``` 














# Angular 2 Starter

The simplest starter kit you can find. Not trying to overcomplicate things, just get up and running with Angular 2. 

All the essentials. None of the extras. Takes a lot of cues from the Angular [quickstart](https://angular.io/docs/ts/latest/quickstart.html).

> This is a great starter for getting straight to the Angular 2 and not dealing with any of the setup.

## About

- **Transpiling ES6**: TypeScript compiled via npm script
    + Compiled from the `app/` folder to the `dist/` folder
- **Loading Imports**: SystemJS is the loader 
- **Serving**: [lite-server](https://github.com/johnpapa/lite-server) serves our dev server

## Requirements

- [node and npm](https://nodejs.org)

## Installation

- Clone the repo: `git clone git@github.com:scotch-io/angular2-starter-basic`
- Choose the new directory: `cd angular2-starter-basic`
- Install dependencies: `npm install`
- Start the app: `npm start`
- View the app: <http://localhost:3000>

## Usage

- The Angular application is found in the `app/` directory

## Caveats

- This is a very basic starter. If you want to use this in production, you're going to need to build out a lot more parts. Parts like:
- Templates are referenced absolutely, which doesn't scale well.
    + You'd want to have your build system help with referencing templates relatively. Better to not absolutely reference them as they could get lost in build systems in larger apps.

## More Production Ready Setup

- Use the [Angular CLI](https://cli.angular.io/)










