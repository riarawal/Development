let fs=require("fs");
console.log("Started execution")
console.log("cpu read")
function cb(err,data)
{
    console.log(data.bytelength);
} 
fs.readFile("f1.mp4",cb);


console.log("cpu free")
console.log("now i can print")