path = require("path")


res = path.relative("./a/b/d","./a/c/e");

console.log("relative :"+res);


res = path.resolve("./a/../abc/../a")

console.log("resolve :"+res);