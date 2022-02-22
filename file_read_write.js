f = require('fs');
f.readFile("abc.txt",(err,data)=>{
    f.writeFile("xyz.txt",data.toString().toUpperCase(),()=>{
        console.log("yes");

})


})