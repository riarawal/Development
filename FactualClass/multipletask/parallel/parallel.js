let fs=require("fs");
console.log("Started execution")
console.log("cpu read")
fs.readFile("../../f1.mp4",function(err,data)
{
    console.log("f1");
})


let finaltime=Date.now()+1000*10
while(Date.now()<finaltime)
{
    
}
fs.readFile("../../f2.mp4",function(err,data)
{
    console.log("f2");
})

console.log("cpu free")
console.log("now i can print")