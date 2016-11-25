# SecureRandom


https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/  
https://github.com/jprichardson/secure-random  

https://developer.mozilla.org/en-US/docs/Web/API/RandomSource  
https://developer.mozilla.org/en-US/docs/Web/API/Crypto  
https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays  


https://nodejs.org/api/crypto.html  



## You could generate a practically unique name for the property using cryptography:

```js
// get 1024 Unicode characters of gibberish
var isMoving = SecureRandom.generateName();

...

if (element[isMoving]) {
  smoothAnimations(element);
}
element[isMoving] = true;
``` 

## window.crypto API



### Web Cryptography API  

W3C Editor’s Draft 24 October 2016  

https://w3c.github.io/webcrypto/Overview.html

https://wiki.whatwg.org/wiki/Crypto  



### Web Cryptography API  

W3C Candidate Recommendation 11 December 2014  

https://www.w3.org/TR/WebCryptoAPI/  











