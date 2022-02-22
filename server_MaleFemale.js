var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');

var server = express();

server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');

});

server.post('/result', (req, res) => {
    https.get('https://api.genderize.io?name=' + req.body.FirstName, (resAPI) => {
        resAPI.on('data', (data) => {
            var a = JSON.parse(data.toSring());
            res.send(a.gender); firstname

        });
    });
});
server.listen(3000, () => {
    console.log("Server start ...");
});