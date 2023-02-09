const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);


// /.../... vs. bulunmasa
server.use("*", (req,res)=>{
    res.status(404).json({
        message:"Not Found"
    })
});

module.exports = server;