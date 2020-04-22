let fs=require("fs");
console.log("before");

fs.readFile("f1.html",function(err,content)
{console.log(content+"");

})
//let content =fs.readFileSync("f1.html");

console.log("after");
