const express = require('express');
const mongoose = require('mongoose');
const http = require("http");

const app = express();

const server = http.createServer(app);
server.maxConnections = 1000;

function configureServer(databaseUrl, serverPort) {
    mongoose.connect(databaseUrl).then(() => {
        console.log(`Connected to the database at ${databaseUrl}`);
        app.listen(serverPort, () => {
            console.log(`Server is running and up on port ${serverPort}`);
        });
    }).catch(err => {
        console.log(err);
    });
}

function advancedConfigureServer(databaseUrl, serverPort) {
    mongoose.connect(databaseUrl).then(()=>{
        console.log(`Connected to the database at ${databaseUrl}`);
        server.listen(serverPort,()=>{
            console.log(`server is running and up on port ${serverPort}`);
        });
    }).catch(err=>{
        console.log(err);
    })
}

function testGet() {
    app.get('/',(req, res)=>{
        res.end('Get Requests Works!')
    });
}

module.exports = {
    configureServer,
    advancedConfigureServer,
    testGet
};