var http = require('http');

var fs = require('fs');

var server = http.createServer((req, res)=>{

    if(req.url=='/contact')
    {
        fs.readFile('./contact.html', (err,data)=>{

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
    
        });
    }
    else if (req.url == '/about')
    {
        fs.readFile('./about.html', (err,data)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/index')
    {
        fs.readFile('./index.html', (err,data)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }
    else
    {
        fs.readFile('./404.html', (err,data)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }

   
   
});

server.listen(3000,()=>{
    console.log("sever start");
});