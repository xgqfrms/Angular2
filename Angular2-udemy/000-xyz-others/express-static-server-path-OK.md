# new server with correct path!

> https://gist.github.com/xgqfrms-GitHub/9b7d30999594d750f9bf35b029b810c1

```code
# html
 <base href="/">
<script type="text/javascript" src="inline.bundle.js"></script>

# router
# /  > /dist/index.html
cache[0] = fs.readFileSync( __dirname + '/dist/index.html');
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

# /inline.bundle.js  > /dist/inline.bundle.js
cache[1] = fs.readFileSync( __dirname + '/dist/inline.bundle.js');
app.get('/inline.bundle.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send( cache[1] );
});

```js
// simple express server for HTML pages!
// ES6 style

const express = require('express');
const fs = require('fs');
const hostname = '127.0.0.1';
// http://localhost:4200/
const port = 4200;
const app = express();

let cache = {};// object is OK!

cache[0] = fs.readFileSync( __dirname + '/dist/index.html');
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

cache[1] = fs.readFileSync( __dirname + '/dist/inline.bundle.js');
app.get('/inline.bundle.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send( cache[1] );
});

cache[2] = fs.readFileSync( __dirname + '/dist/styles.bundle.js');
app.get('/styles.bundle.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send( cache[2] );
});

cache[3] = fs.readFileSync( __dirname + '/dist/main.bundle.js');
app.get('/main.bundle.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send( cache[3] );
});


app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});
``` 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0">
    <meta name="description" content="Angualr2 App">
    <meta name="author" content="xgqfrms, https://xgqfrms.github.io">
    <title>Ng2App</title>
    <base href="/">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <app-root>Loading...</app-root>
    <script type="text/javascript" src="inline.bundle.js"></script>
    <script type="text/javascript" src="styles.bundle.js"></script>
    <script type="text/javascript" src="main.bundle.js"></script>
</body>
</html>

``` 

