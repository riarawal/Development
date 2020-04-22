let request=require("request");
let fs=require("fs");
console.log("before")
request("https://www.amazon.in/slp/apple-iphone-mobiles/nsvhbqse3c8y4ta",function(err,res,html)
{
  if(err===null&&res.statusCode===200)
  {
      //fs.writeFile("index.html"),html,function(err)
      //{
        //  console.log("written to disk");
  //    }
  fs.writeFileSync("index.html",html);
  }  
  else if(res.statusCode==404)
  {
    console.log("invalid url");
  }
  else{
    console.log(err);
    console.log(res.statusCode);
  }
})
console.log("after");

//https://www.espncricinfo.com/series/19322/commentary/1187683
