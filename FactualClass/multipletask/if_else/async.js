
let fs=require("fs");

let f1=fs.readFile("../../f1.txt",f1cb);
function f1cb(err,data)
{
    console.log("f1 content "+data.byteLength)
    if(data.byteLength>20)
    {
        fs.readFile("../../f2.txt",f2cb)
    }
    else{
        fs.readFile("../../f3.txt",f3cb)
    }
    
    
}
function f2cb(err,data)
{
    console.log("f2 content "+data.byteLength)
    if(data.byteLength>40)
    {
        fs.readFile("../../f7.txt",f7cb)
    }
    else{
        fs.readFile("../../f6.txt",f6cb)
    }
    
}
function f3cb(err,data)
{
    console.log("f3 content "+data.byteLength)
    if(data.byteLength>30)
    {
        fs.readFile("../../f5.txt",f5cb)
    }
    else{
        fs.readFile("../../f4.txt",f4cb)
    }
    
}
function f4cb(err,data)
{
    console.log("f4 content "+data.byteLength)
    //fs.readFile("../../f4.txt",f4cb)
}
function f5cb(err,data)
{
    console.log("f5 content "+data.byteLength)
    //fs.readFile("../../f5.txt",f5cb)
}
function f6cb(err,data)
{
    console.log("f6 content "+byteLength)
    
}
function f7cb(err,data)
{
    console.log("f7content "+byteLength)
    
}
