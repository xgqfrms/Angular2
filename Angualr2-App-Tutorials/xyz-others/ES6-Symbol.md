# ES6 In Depth: Symbols

> https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/  
> https://en.wikipedia.org/wiki/Symbol_%28programming%29  

```js
// create a unique symbol
var isMoving = Symbol("isMoving");

...

if (element[isMoving]) {
  smoothAnimations(element);
}
element[isMoving] = true;
``` 






