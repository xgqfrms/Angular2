# JavaScript Scoping and Hoisting (2010-02-08)  

http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html  

https://rainsoft.io/javascript-hoisting-in-details/  

https://www.sitepoint.com/back-to-basics-javascript-hoisting/  

https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/  



## var Hoisting  

https://www.interviewcake.com/question/python/js-whats-wrong  




https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var  

因为变量声明(和一般的声明), 在任何代码执行之前被处理，在代码中的任何地方声明一个变量等效于在顶部声明它。
这也意味着一个变量可以在声明之前被使用。
这种行为被称为“提升”, 因为它看起来变量声明被移动到函数或全局代码的顶部。
因此，建议始终在其范围顶部声明变量(全局代码的顶部和函数代码的顶部), 因此清楚哪些变量是函数范围(局部)，并且在范围链上被解析。

用var声明的变量的范围是它的当前执行上下文，它或者是封闭函数，或者对于在任何函数外声明的变量，全局。

为一个未声明的变量分配一个值，在执行赋值时隐式地创建一个全局变量(它成为全局对象的一个​​属性)。

## 声明变量和未声明变量之间的差异是：

1. 声明的变量在它们被声明的执行上下文中被约束。未声明的变量总是全局的。

2. 在执行任何代码之前创建声明的变量。未分配的变量不存在，直到分配给它们的代码被执行。

3. 声明的变量是它们的执行上下文(函数或全局)的不可配置属性。未声明的变量是可配置的(例如可以删除)。

由于这三个差异，未能声明变量将很可能导致意想不到的结果。

因此，建议始终声明变量，而不管它们是在函数还是全局范围内。

在ECMAScript 5 严格模式下，分配给未声明的变量会抛出错误。






http://www.w3schools.com/js/js_hoisting.asp  


## Hoisting是JavaScript默认的将声明移动到顶部的行为。

在 ES5 中，变量可以在它已被使用后声明。换一种说法, 可以在声明之前使用变量。  

Hoisting 是 ES5 的默认行为，将所有声明移动到当前范围的顶部(到当前脚本或当前函数的顶部)。  

JavaScript仅提升声明，而不是初始化。  
(JavaScript仅提升变量/函数声明，而不提升变量的初始化值。)


## error ???

这是因为只有声明（var y），而不是初始化（= 7）被提升到顶部。

由于提升，y在它被使用之前已经被声明，但是因为初始化没有被提升，y的值是未定义的。

```codes 
var x = 5; // Initialize x
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y
var y = 7; // Initialize y

#  === 

var x = 5; // Initialize x
var y;     // Declare y
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y
y = 7;    // Assign 7 to y
``` 



## 在顶部声明您的变量！
Hoisting是（对许多开发者）JavaScript的未知或被忽视的行为。  
如果开发人员不了解提升，程序可能包含错误（错误）。  
为了避免错误，请始终在每个作用域的开始处声明所有变量。  由于这是JavaScript解释代码的方式，它总是一个好的规则。  

## 严格模式  "use strict";  
http://www.w3schools.com/js/js_strict.asp  

JavaScript在严格模式下不允许使用变量，如果他们没有声明。

在严格模式下抛出 ReferenceError  

