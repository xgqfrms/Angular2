# Hosting Angular 2 Applications On Firebase

https://firebase.google.com/docs/cli/

## step1: 创建项目  

https://console.firebase.google.com  


## step2: 将 Firebase 添加到您的网页应用  

```js
<script src="https://www.gstatic.com/firebasejs/3.6.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgJvm2a3pwaYhQA95DJ0Rp2s5f3TC_xVM",
    authDomain: "ng2-app-c94ed.firebaseapp.com",
    databaseURL: "https://ng2-app-c94ed.firebaseio.com",
    storageBucket: "ng2-app-c94ed.appspot.com",
    messagingSenderId: "471791320538"
  };
  firebase.initializeApp(config);
</script>
``` 

## step3: 

firebase login

## step4:

firebase init

## step5:

??? firebase use --add

## step6:

firebase deploy

# firebase deploy --only hosting

> --only 标志的有效功能是 hosting、database 和 storage

## step7:

> firebase-关联自定义域名

ng2.webgeeker.xyz  

angular2.webgeeker.xyz  

??? CNAME

https://github.com/xgqfrms-GitHub/angular2/blob/master/README.md  


















# Ng2App

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
