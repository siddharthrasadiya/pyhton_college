var express = require('express');
var server = express();

server.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

server.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');

});

server.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html');

});




server.listen(3000,()=>{
    console.log("server start ...");
});