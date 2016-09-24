(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger =require('./logger');
var mylog =require('./mylog');

logger.log('Hurray, it works! :)');
logger.log('\n');
logger.log('Hurray, all works! :)');

mylog.log();
mylog.log();
},{"./logger":2,"./mylog":3}],2:[function(require,module,exports){
module.exports = {
	log: function(string) {
		if(console) console.log(string);
	}
}
},{}],3:[function(require,module,exports){
module.exports = {
	log: function(){
		console.log('just for log test!');
	}
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFx3d3dSb290XFxBbmd1bGFySlNcXGd1bHAtdGVzdFxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRzovd3d3Um9vdC9Bbmd1bGFySlMvZ3VscC10ZXN0L3NyYy9qcy9mYWtlXzc3NTlkNzc5LmpzIiwiRzovd3d3Um9vdC9Bbmd1bGFySlMvZ3VscC10ZXN0L3NyYy9qcy9sb2dnZXIuanMiLCJHOi93d3dSb290L0FuZ3VsYXJKUy9ndWxwLXRlc3Qvc3JjL2pzL215bG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgbG9nZ2VyID1yZXF1aXJlKCcuL2xvZ2dlcicpO1xyXG52YXIgbXlsb2cgPXJlcXVpcmUoJy4vbXlsb2cnKTtcclxuXHJcbmxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29ya3MhIDopJyk7XHJcbmxvZ2dlci5sb2coJ1xcbicpO1xyXG5sb2dnZXIubG9nKCdIdXJyYXksIGFsbCB3b3JrcyEgOiknKTtcclxuXHJcbm15bG9nLmxvZygpO1xyXG5teWxvZy5sb2coKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRsb2c6IGZ1bmN0aW9uKHN0cmluZykge1xyXG5cdFx0aWYoY29uc29sZSkgY29uc29sZS5sb2coc3RyaW5nKTtcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRsb2c6IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zb2xlLmxvZygnanVzdCBmb3IgbG9nIHRlc3QhJyk7XHJcblx0fVxyXG59Il19
