fs = require('fs');
const dir = './';

fs.readdir(dir, (err, files) => {

//     console.log(files);
//   console.log(files.length);
    var c=0;
    for (i =0;i<files.length;i++)
    {
        if(getExtension(files[i]) == '.js')
        {
            c++;
        }
    }
    console.log("count is :"+c);

});

function getExtension(filename) {
    var i = filename.lastIndexOf('.');
    console.log(i);
    return (i < 0) ? '' : filename.substr(i);
}
