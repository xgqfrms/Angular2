# Material Design components for Angular 2  

https://github.com/angular/material2  


## CLI 

https://github.com/angular/material2/blob/master/GETTING_STARTED.md


```sh
$ npm install -g angular-cli

$ npm install --save @angular/material
$ npm i -S @angular/material
$ npm i -D @angular/material
``` 



## Import the Angular Material NgModule

```code
# src/app/app.module.ts

import { MaterialModule } from '@angular/material';

// other imports 
@NgModule({
  imports: [MaterialModule.forRoot()],
  ...
})
export class PizzaPartyAppModule { }

``` 



## button

https://github.com/angular/material2/blob/master/src/lib/button/README.md  
https://material.google.com/components/buttons.html#  

```code
<button md-button>FLAT</button>
<button md-raised-button>RAISED</button>
<button md-fab>
    <md-icon class="md-24">add</md-icon>
</button>
<button md-mini-fab>
    <md-icon class="md-24">add</md-icon>
</button>

<button md-raised-button color="primary">PRIMARY</button>
<button md-raised-button color="accent">ACCENT</button>
<button md-raised-button color="warn">WARN</button>

<button md-button disabled>OFF</button>
<button md-raised-button [disabled]="isDisabled">OFF</button>
<button md-mini-fab [disabled]="isDisabled"><md-icon>check</md-icon></button>
``` 

## Configuring SystemJS  

```js
System.config({
  // existing configuration options
  map: {
    ...,
    '@angular/material': 'npm:@angular/material/material.umd.js'
  }
});
``` 




## md-slide-toggle & md-slider  

https://www.npmjs.com/package/hammerjs  

http://hammerjs.github.io/

Hammer helps you add support for touch gestures to your page, and remove the 300ms delay from clicks.  

https://www.w3.org/TR/pointerevents/#the-touch-action-css-property  

```
$ npm i -S hammerjs
$ npm i -D hammerjs
``` 

## CDN 

https://developers.google.com/speed/libraries/#hammerjs  

```code
<script src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"></script>

``` 




## Theming your Angular Material app  

https://github.com/angular/material2/blob/master/docs/theming.md  



## Using Material Design icons with md-icon:  

```code
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

``` 



## demmo 

https://github.com/jelbourn/material2-app  
https://material2-app.firebaseapp.com/  
https://github.com/kara/leashed-in  





