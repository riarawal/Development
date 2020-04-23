let fs=require("fs");
console.log("Started execution")
console.log("cpu read")
fs.readFile("f1.mp4",function(err,data)
{
    console.log(data.bytelength);
})

console.log("cpu free")
console.log("now i can print")