let fs=require("fs");
console.log("before");
let f1=fs.readFile("../../f1.txt",f1cb);


function f1cb(err,data)
{
    console.log("f1 content "+data.length)
    fs.readFile("../../f2.txt",f2cb)
}
function f2cb(err,data)
{
    console.log("f2 content "+data.length)
    fs.readFile("../../f3.txt",f3cb)
}
function f3cb(err,data)
{
    console.log("f3 content "+data.length)
    
}



   
console.log("after")
