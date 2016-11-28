const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();


// var cache = {};
// cache["index.html"] = fs.readFileSync( __dirname + '/views/testview.html');

let cache = [];
cache[0] = fs.readFileSync( __dirname + '/index.html');
cache[1] = fs.readFileSync( __dirname + '/views/testview.html');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send( cache[0] );
});

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