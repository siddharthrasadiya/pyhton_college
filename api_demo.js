var https = require('https')

https.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest",(res)=>{
    res.on('data',(data)=>{

        a = JSON.parse(data.toString());
        console.log(a.data[0].Nation);
        console.log(a.data[0].Population);
        console.log(a);
    })
});


var http = require('http')
http.get("http://universities.hipolabs.com/search?name=middle",(res)=>{
    res.on('data',(data)=>{

        a = JSON.parse(data.toString());

        // console.log(a[0].web_pages[0]);
       // console.log(a);
    })
});





