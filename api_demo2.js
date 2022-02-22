var https = require('http')
var express = require('express')
app = express();

app.get('/',(req,res) => {
    https.get("http://universities.hipolabs.com/search?name=middle",(resHttp) => {

        let chunks =[];
        resHttp.on('data', (data) => {
            chunks.push(data);
        });
        resHttp.on('end', () =>{
            var data =  Buffer.concat(chunks);
            a = JSON.parse(data);

            var allData ="<table style='width:40%' border=1 bgcolor='#9F0009F'><tr><th>Domain</th><th>contry</th></tr>";
            for(i = 0;i<a.length;i++)
            {
               
                allData += "<tr style='margin:10px;'><td style='padding:10px;'>"+a[i].domains[0]+"</td><td>"+
                a[i].country+"</td></tr>";
            }
            allData += "</table>";
            //res.send(a.data[0]);
           res.send(allData);
           // res.send(a[0]);
            res.end();
        });


    });

});


app.listen(3000,()=>{
    console.log('listening on .. ');
});