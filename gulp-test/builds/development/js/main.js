!function r(o,n,e){function t(i,f){if(!n[i]){if(!o[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=n[i]={exports:{}};o[i][0].call(l.exports,function(r){var n=o[i][1][r];return t(n?n:r)},l,l.exports,r,o,n,e)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)t(e[i]);return t}({1:[function(r,o,n){var e=r("./logger");e.log("Hurray, it works! :)")},{"./logger":2}],2:[function(r,o,n){o.exports={log:function(r){console&&console.log(r)}}},{}]},{},[1]);