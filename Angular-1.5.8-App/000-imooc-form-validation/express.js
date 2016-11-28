const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

/**
 * static file path ??? & router ???
 * 
 */


// var cache = {};
// cache["index.html"] = fs.readFileSync( __dirname + '/views/testview.html');

let cache = [];
cache[0] = fs.readFileSync( __dirname + '/index.html');
cache[1] = fs.readFileSync( __dirname + '/views/testview.html');

// path add
cache[2] = fs.readFileSync( __dirname + '/app/main.js');
app.get('/app/main.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send( cache[2] );
});

// path add 
/*
http://www.w3schools.com/tags/tag_link.asp
<link rel="stylesheet" type="text/css" href="theme.css">
 */
cache[3] = fs.readFileSync( __dirname + '/public/css/style.css');
app.get('/public/css/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.send( cache[3] );
});


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

app.get('/index*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

/*
app.get('/index', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

app.get('/index.html', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

app.get('/index.*', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});
 */



app.get('/test', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[1] );
});

app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/ 
        Server hostname ${hostname} is listening on port ${port}!
    `);
});

/**
 * https://gist.github.com/xgqfrms-GitHub/7697d5975bdffe8d474ac19ef906e906
 *
 * http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express/40843936%2340843936
 * http://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js/40844201%2340844201
 *
 * https://zhuanlan.zhihu.com/p/24018772
 *
 * http://stackoverflow.com/users/5934465/xgqfrms
 */