const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

app.get('/dishes', (req,res) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req,res) => {
    res.end('Will add the dish: ' + req.body.name);
});

app.put('/dishes', (req,res) => {
    res.statusCode = 200;
    res.end('PUT operation not supported');
});

app.use(express.static(__dirname + '/public'));

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