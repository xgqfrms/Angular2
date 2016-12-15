# Convert Angular TypeScript examples into ES6 and ES5 JavaScript  

https://angular.io/docs/ts/latest/cookbook/ts-to-js.html




# what's the different among the three method codes? 
# they looks same to each other! \#13488  

> https://github.com/angular/angular/issues/13488  

```codes
// TypeScript  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

// ES6 JavaScript with decorators  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

//  ES6 JavaScript  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

// ES5 JavaScript  
var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
var LocationStrategy = ng.common.LocationStrategy;
var HashLocationStrategy = ng.common.HashLocationStrategy;

``` 

