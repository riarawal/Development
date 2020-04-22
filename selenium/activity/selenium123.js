require("chromedriver")
let fs=require("fs");
//let swd=require("selenium-webdriver")
let swd=require("selenium-webdriver");
let credentialsFile=process.argv[2];
let metaDataFile=process.argv[3];
let courseNameFile=process.argv[4];


let username,password, gModules,gfilecontent,gLectures;
let bldr=new swd.Builder();
let driver=bldr.forBrowser("chrome").build();


let credentialsWillBeReadPromise=fs.promises.readFile(credentialsFile);
credentialsWillBeReadPromise
.then(function(credentials)
{
credentials=JSON.parse(credentials);
username=credentials.username
password=credentials.password
console.log(username+"  "+password)
let googleWillBeOpenPromise=driver.get("https://pepcoding.com/login");
return googleWillBeOpenPromise
})




.then(function()
{
   // console.log("kuch ni hua");
let emailWillBeSelectedPromise=driver.findElement(swd.By.css("input[type=email]"));
let passwordWillBeSelectedPromise=driver.findElement(swd.By.css("input[type=password]"));
let combinedPromise=Promise.all([emailWillBeSelectedPromise,passwordWillBeSelectedPromise])
return combinedPromise;
})
//.then(function(emailElement)
//{
  //  let abracadabraWillBeSelectedPromise=emailElement.sendKeys(username);
  //  return abracadabraWillBeSelectedPromise;
//})
//.then(function()
//{console.log("email has been sent");
//let passwordWillBeSelectedPromise=driver.findElement(swd.By.css("input[type=password]"));
//return passwordWillBeSelectedPromise;
//})
.then(function(ElementArray){
    let emailWillBeSendPromise=ElementArray[0].sendKeys(username);
   let passwordWillBeEnteredPromise=ElementArray[1].sendKeys(password);
   let combinedinputPromise=Promise.all([emailWillBeSendPromise,passwordWillBeEnteredPromise])
return combinedinputPromise;
   //return passwordWillBeEnteredPromise;
})
.then(function()
{
let submitWillBeSelectedPromise=driver.findElement(swd.By.css("button[type=submit]"));
return submitWillBeSelectedPromise;
})
.then(function(submitbtn)
{
    let submitWillBeClickedPromise=submitbtn.click();
    return submitWillBeClickedPromise;
})
.then(function()
{
    let elwbfp = driver.wait(swd.until.elementsLocated(swd.By.css('div.resource a')));
    return elwbfp;
})
.then(function()
{console.log("email has been sent");
let resourceanchorWillBeSelectedPromise=driver.findElement(swd.By.css("div.resource a"));
return resourceanchorWillBeSelectedPromise;
})
.then(function(resourcePagecanchor)
{
    let rPageLinkPromise=resourcePagecanchor.getAttribute("href");
    return rPageLinkPromise;
})
.then(function(rPageLink)
{
    let NavigateToCourse=driver.get(rPageLink);
    return NavigateToCourse;
})
.then(function()
{
    let siteOverlayPromise=driver.findElement(swd.By.css("#siteOverlay"));
    return siteOverlayPromise;
})
.then(function(soe)
{let waitOverlayPromise=driver.wait(swd.until.elementIsNotVisible(soe),10000);
return waitOverlayPromise;
})
.then(function()
{
    let courseWillBeLocatedPromise=driver.findElement(swd.By.css("#courseCard33"));
    return courseWillBeLocatedPromise;
})
.then(function(courseCard)
{
    let courseWillBeClickedPromise=courseCard.click();
    return courseWillBeClickedPromise;
})
/////
.then(function()
{
    let lisTabLocatedPromise= driver.wait(swd.until.elementsLocated(swd.By.css(".lis.tab"),10000))
    return lisTabLocatedPromise
    
})

.then(function()
{
let moduleWillBeSelectedPromise=driver.findElements(swd.By.css(".lis.tab"));
return moduleWillBeSelectedPromise;
})
.then(function(modules)
{   gModules=modules;
    //console.log("thge size is,",modules.length)
 let moduleTextPromiseArr=[];
 for(let i=0;i<modules.length;i++)
 {
     let moduleNamePromise=modules[i].getText();
     moduleTextPromiseArr.push(moduleNamePromise);
 }
let AllModuleNamePromise=Promise.all(moduleTextPromiseArr);
return AllModuleNamePromise;
})
.then(function(AllModulesText)
    {
        //console.log("text size is",AllModulesText.length)
        let f = fs.readFileSync('./metadata123.json');
        // console.log(f)
       f= JSON.parse(f)
       gfilecontent = f.questions[0];
        let module = f.questions[0].module;
        // console.log(f);
        // console.log(module)
    let i;
    let mwbcp;
    //console.log("gmodules",gModules.length)
   for(i=0;i<AllModulesText.length;i++)
    {
        //console.log(AllModulesText[i]);
        if(AllModulesText[i].includes(module))
        {
            mwbcp = gModules[i].click()
        }
    }
    return mwbcp;})
    /////
    /////
    .then(function()
    {
    let lectureWillBeSelectedPromise=driver.findElements(swd.By.css(".black-text.no-margin"));
    return lectureWillBeSelectedPromise;
    })
    .then(function(lectures)
    {   gLectures=lectures;
        //console.log("thge size is,",modules.length)
     let lectureTextPromiseArr=[];
     for(let i=0;i<lectures.length;i++)
     {
         let lectureNamePromise=lectures[i].getText();
         lectureTextPromiseArr.push(lectureNamePromise);
     }
    let AllLectureNamePromise=Promise.all(lectureTextPromiseArr);
    return AllLectureNamePromise;
    })
    .then(function(AllLecturesText)
        {
            //console.log("text size is",AllModulesText.length)
           f = fs.readFileSync('./metadata123.json');
            // console.log(f)
          f= JSON.parse(f)
           //gfilecontent = f.questions[0];
            let lecture = f.questions[0].lecture;
            // console.log(f);
            // console.log(module)
        let j;
        let mlcp;
        //console.log("gmodules",gModules.length)
       for(j=0;j<AllLecturesText.length;j++)
        {
            //console.log(AllLecturesText[j]);
            if(AllLecturesText[j].includes(lecture))
            {
                mlcp = gLectures[j].click()
            }
        }
        return mlcp;
    })

        ////////**************** ***************///////////////////

        .then(function()
        {
        let questionWillBeSelectedPromise=driver.findElements(swd.By.css(".green-text.no-margin"));
        return questionWillBeSelectedPromise;
        })
        .then(function(questions)
        {   gQuestions=questions;
            //console.log("thge size is,",modules.length)
         let questionTextPromiseArr=[];
         for(let i=0;i<questions.length;i++)
         {
             let questionNamePromise=questions[i].getText();
             questionTextPromiseArr.push(questionNamePromise);
         }
        let AllQuestionNamePromise=Promise.all(questionTextPromiseArr);
        return AllQuestionNamePromise;
        })
        .then(function(AllQuestionsText)
            {
                //console.log("text size is",AllModulesText.length)
               f = fs.readFileSync('./metadata123.json');
                // console.log(f)
              f= JSON.parse(f)
               //gfilecontent = f.questions[0];
                let question = f.questions[0].problem;
                // console.log(f);
                // console.log(module)
            let j;
            let mqp;
            //console.log("gmodules",gModules.length)
           for(j=0;j<AllQuestionsText.length;j++)
            {
                //console.log(AllLecturesText[j]);
                if(AllQuestionsText[j].includes(question))
                {
                    mqp = gQuestions[j].click()
                }
            }
            return mqp;
    



        //////////////////*********************** */////////////////////


    ////////
//.then(function(AllModulesText)
//{
//let i;
//for(i=0;i<AllModulesText.length;i++)
//{
 
//}
//let moduleswillbeClickedPromise=gModules[i].click();
//return moduleswillbeClickedPromise;
}).then(function(){
    console.log("ho gya")
})


////////////////////
/////.then(function()
/////{
  ////  let metaDataWillBeReadPromise=fs.promises.readFile(metaDataFile);
   //// return metaDataWillBeReadPromise;
////})
////.then(function(metadata)
////{
   /// metadata=JSON.parse(metadata);
   /// let question=metadata[0];
    ///let questionOpenPromise=driver.get(question.url);
    ///return questionOpenPromise;
////})
.then(function()
{
    console.log("Opened Question Page");
})
.catch(function(err)
{
    console.log(err);
})




function goToQuestionPage(){
    //read json file
        
    let lisTabLocatedPromise= driver.wait(swd.until.elementsLocated(swd.By.css(".lis.tab"),1000))
       return lisTabLocatedPromise

    .then(function()
    {
    let moduleWillBeSelectedPromise=driver.findElement(swd.By.css(".lis.tab"));
    return moduleWillBeSelectedPromise;
    })
    .then(function(modules)
    {   let gModules=modules;
        let moduleTextPromiseArr=[];
        for(let i=0;i<modules.length;i++)
        {
            let moduleNamePromise=modules[i].getText();
            moduleTextPromiseArr.push(moduleNamePromise);
        }
    let AllModuleNamePromise=Promise.all(moduleTextPromiseArr);
    return AllModuleNamePromise;
    })
    .then(function(AllModulesText)
    {
        let f = fs.readFileSync('./metadata123.json');
        let module = f.questions[0].module;
        console.log(f);
        console.log(module);
    let i;
    for(i=0;i<AllModulesText.length;i++)
    {
        if(AllModulesText[i].includes("Recursion"==true))
        {//break
            let moduleswillbeClickedPromise=gModules[i].click();
    return moduleswillbeClickedPromise;
        }
    }
    //let moduleswillbeClickedPromise=gModules[i].click();
    //return moduleswillbeClickedPromise;

    })
    
}


