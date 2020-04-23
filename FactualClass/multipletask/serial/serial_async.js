let fs=require("fs");


console.log("before");
let f1=fs.readFile("../../f1.txt",function(err,data)
{
    console.log("f1 content "+data.length)

    let f2=fs.readFile("../../f2.txt",function(err,data)
{
    console.log("f2 content "+data.length)

    let f3=fs.readFile("../../f3.txt",function(err,data)
{
    console.log("f3 content "+data.length)
})

})

})
console.log("after")
