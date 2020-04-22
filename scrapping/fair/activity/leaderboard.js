let request=require("request");
let fs=require("fs");
let cheerio=require("cheerio");
let leaderboard=[];
let gcount=0;
console.log("sending request");

request("https://www.espncricinfo.com/scores/series/19322",function(err,res,html)
{
  if(err===null&&res.statusCode===200)
  {
     
  console.log("received data");
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
    let d=cheerio.load(html);
    let cards=d(".cscore.cscore--final.cricket.cscore--watchNotes")

    for(let i=0;i<cards.length;i++)
    {
        let matchType=d(cards[i]).find(".cscore_info-overview").html();
        let test=matchType.includes("ODI")||matchType.includes("T20");
        if(test===true)
        {   //console.log(matchType);
            let anchor=d(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
           
            let matchLink=("https://www.espncricinfo.com"+anchor);
            goToMatchPage(matchLink);
        }
    }


console.log("````");
}
function goToMatchPage(MatchLink)
{    gcount++;
    request(MatchLink,function(err,res,html)
    {
        if(err===null&&res.statusCode===200)
  {
      
  handleMatch(html);
  gcount--;

if(gcount==0)
{
    console.table(leaderboard);
}

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
};



function handleMatch(html){
    let d=cheerio.load(html);
    let format = d(".cscore.cscore--final.cricket .cscore_info-overview").html();
    //let format=d(".cscore.cscore--final.cricket.cscore_info-overview").html();
    format = format.includes("T20") ? "T20" : "ODI";
    let team=d(".sub-module.scorecard h2");
    let innings=d(".sub-module.scorecard");
    //console.log(format);
    for(let i=0;i<innings.length;i++)
    {
       let batsManRows=d(innings[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen");
       //console.log(d(teams[i]).text())
       for(let br=0;br<batsManRows.length;br++)
       {
           let batsMan=d(batsManRows[br]);
           let batsManName=batsMan.find(".cell.batsmen").text();
           let batsManRuns=batsMan.find(".cell.runs").html();

handlePlayer(format,d(team[i]).text(),batsManName,batsManRuns);



           //console.log(batsManName +" "+batsManRuns);      
        }
           //console.log("```");
       
    }
}
function handlePlayer(format,team,batsManName,batsManRuns)
{
    batsManRuns=Number(batsManRuns);
    for(let i=0;i<leaderboard.length;i++)
    {
        let pObj=leaderboard[i];
        if(pObj.Name===batsManName&&pObj.Team===team&&pObj.Format===format)
        {
            pObj.Runs+=batsManRuns;
            return;

        }
    }

    let obj={
        Runs:batsManRuns,
        Format:format,
        Team:team,
        Name:batsManName


    }
    leaderboard.push(obj);
}

    //console.log("````");
    //console.log("after");


