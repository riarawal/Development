//https://www.espncricinfo.com/series/19322/scorecard/1187683

let request=require("request");
let fs=require("fs");
let cheerio=require("cheerio");
console.log("sending request")
request("https://www.espncricinfo.com/series/19322/scorecard/1187683",function(err,res,html)
{
  if(err===null&&res.statusCode===200)
  {
      //fs.writeFile("index.html"),html,function(err)
      //{
        //  console.log("written to disk");
  //    }
  console.log("received data");
  //fs.writeFileSync("maxwicket.html",html);
  parseHtml(html);
  }  
  else if(res.statusCode==404)
  {
    console.log("invalid url");
  }
  else{
    console.log(err);
    console.log(res.statusCode);
  }
});
function parseHtml(html)
{
    console.log("parsing html");
    let d=cheerio.load(html);
    let bowlers=d(".scorecard-section.bowling table tbody tr");

    let maxwick=0;
    let maxwickBowler="";

    for(let i=0;i<bowlers.length;i++)
    {
        let bowlerName=d(d(bowlers[i]).find("td")[0]).text();
        let wickets=d(d(bowlers[i]).find("td")[5]).text();
        //console.log(bowlerName+ " "+wickets)

   if(wickets>maxwick)
   {
       maxwick=wickets;
       maxwickBowler=bowlerName;

   }

    }
    console.log( maxwickBowler+ " "+maxwick)
}

//console.log("`````");

//console.log("after");

//https://www.espncricinfo.com/series/19322/commentary/1187683


