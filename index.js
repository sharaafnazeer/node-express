const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();


app.use((req, res, next) => {

    console.log(req.headers);
    res.statusCode = 200;
    res.json({
        'response' : 'Success'
    });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server started`);
});