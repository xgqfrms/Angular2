# webpack


## tutorials

[getting-started](http://webpack.github.io/docs/tutorials/getting-started/)

```sh
>
$ npm install webpack -g
$ npm install css-loader style-loader --save-dev
```

## entry.js(content.js) => bundle.js

```sh
>
$ webpack ./entry.js bundle.js

$ webpack ./entry.js bundle.js --module-bind 'css=style!css'
# or
$ webpack ./entry.js bundle.js --module-bind "css=style!css"
```

## webpack.config.js

```js
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

```sh
>
$ webpack
# A PRETTIER OUTPUT
$ webpack --progress --colors
# WATCH MODE
$ webpack --progress --colors --watch
```


## DEVELOPMENT SERVER

```sh
>
$ npm install webpack-dev-server -g

# DEVELOPMENT SERVER(WATCH MODE)
$ webpack-dev-server --progress --colors
```


[Todo's MVC application](https://egghead.io/lessons/tools-intro-to-the-production-webpack-course)

## WRITING YOUR OWN YEOMAN GENERATOR

[Generators](http://yeoman.io/authoring/index.html)

## TodoMVC

[TodoMVC](http://todomvc.com/)

[AngularJS • TodoMVC](http://gcloud-todos.appspot.com/examples/angularjs/#/)

[Vanilla ES6 • TodoMVC](http://todomvc.com/examples/vanilla-es6/)

[Todo's MVC application](https://egghead.io/lessons/tools-intro-to-the-production-webpack-course)