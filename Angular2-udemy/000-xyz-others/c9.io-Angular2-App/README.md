# c9.io URL path error handler

https://angular2-xgqfrms.c9users.io/




step1: app should in the root path

step2: install packages
```sh
$ npm i -D async
$ npm i -D express
$ npm i -D socket.io
``` 

step3: server.js router dist

# Chat server listening at 0.0.0.0:8080
```js
router.use(express.static(path.resolve(__dirname, 'dist')));
``` 

step4: ng build

```sh
$ ng build

``` 


step5: node server.js

```sh
$ node server.js

# Chat server listening at 0.0.0.0:8080
``` 























# Ng2app

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
