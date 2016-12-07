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

