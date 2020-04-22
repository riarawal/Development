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
    let batsman=d(".scorecard-section.batsmen .flex-row .wrap.batsmen");

    let maxruns=0;
    let maxScorer="";

    for(let i=0;i<batsman.length;i++)
    {   let batsmen=d(batsman[i]);
        let batsmenName=batsmen.find(".cell.batsmen").text();
        let wickets=batsmen.find(".cell.runs").text();
        //console.log(bowlerName+ " "+wickets)

   if(wickets>maxwick)
   {
       maxwick=wickets;
       maxwickBowler=bowlerName;

   }

    }
    console.log( maxwickBowler+ " "+maxwick)
}
