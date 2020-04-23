let fs=require("fs");
let f1=fs.readFileSync("../../f1.txt");
console.log("f1 content "+f1.byteLength)
if(f1.byteLength>20)
{
    let f2=fs.readFileSync("../../f2.txt");
    console.log("f2 content "+f2.byteLength)
    if(f2.byteLength<40)
    {
        let f6=fs.readFileSync("../../f6.txt");
    console.log("f6 content "+f6.byteLength)
    }
    else{
        let f7=fs.readFileSync("../../f7.txt");
    console.log("f7 content "+f7.byteLength)
    }
}
else{
    let f3=fs.readFileSync("../../f3.txt");
    console.log("f3 content "+f3.byteLength)
    if(f3.byteLength<30)
    {
        let f4=fs.readFileSync("../../f4.txt");
    console.log("f4 content "+f4.byteLength)
    }
    else{
        let f5=fs.readFileSync("../../f5.txt");
    console.log("f5 content "+f5.byteLength)
    }
}



