// HTTP SERVER

const express = require('express');

const app = express();
const http = require('http');

const HOST = '127.0.0.1';
const HTTP_PORT = 3000;
http.createServer(app).listen(HTTP_PORT, function () {
    console.log('Http Server listening on port 3000!')
});

// TCP SERVER

const net = require('net');
const TCP_PORT = 6969;
const tcpService = require('./services/tcp.service');

net.createServer(tcpService.initIO).listen(TCP_PORT, HOST);
