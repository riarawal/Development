let fs=require("fs");
let f1=fs.readFileSync("../../f1.txt");
console.log("f1 content "+f1.byteLength)
let f2=fs.readFileSync("../../f2.txt");
console.log("f2 content "+f2.byteLength)
let f3=fs.readFileSync("../../f3.txt");
console.log("f3 content "+f3.byteLength)
