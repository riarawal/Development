let request=require("request");
let fs=require("fs");
let cheerio=require("cheerio");
console.log("before")
request("https://www.espncricinfo.com/series/19322/commentary/1187683",function(err,res,html)
{
  if(err===null&&res.statusCode===200)
  {
      //fs.writeFile("index.html"),html,function(err)
      //{
        //  console.log("written to disk");
  //    }
  fs.writeFileSync("index.html",html);
  //isko comment bhi kr skte h index wale ko not needed line 13
  parseHTML(html);
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
function parseHTML(html)
{
    console.log("```````````");
    let d=cheerio.load(html);
    let itemWrapper=d(".item-wrapper .description");
    let text=d(itemWrapper[0]).text();
    console.log(text);
}

console.log("after");

//https://www.espncricinfo.com/series/19322/commentary/1187683
