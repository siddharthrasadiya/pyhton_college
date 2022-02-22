var cp = require('child_process');

cp.exec("ls",(err,stdout,stdin)=>{
    console.log(stdout);
});