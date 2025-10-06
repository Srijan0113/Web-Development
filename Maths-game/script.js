let playing=false;
let score;
let timeremaining;
let action;
let correctanswer;

// if we click on start game button

document.getElementById("startreset").onclick=function()
{
    // if we  are playing
    if (playing==true)
    {
        location.reload(); // reload the page
    }
    else 
    {
        //if we are not playing
        //change the mode to playing
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        // show the countdown box
        show("timeremaining");
        timeremaining=60;
        document.getElementById("trvalue").innerHTML=timeremaining;
        //hide game over
        hide("gameover")
        // to change button to reset game
        document.getElementById("startreset").innerHTML="Reset Game";
        // show the countdown box
        showCountDown();
        // generate question and answer
        generateQA();
        }
}
// Show and hide function
function show(id)
{
    document.getElementById(id).style.display="block";
}
function hide(id)
{
    document.getElementById(id).style.display="none";
}
// function for countdown
function showCountDown(){

         action = setInterval(function(){
            timeremaining--;
        
         document.getElementById("trvalue").innerHTML=timeremaining;
         if(timeremaining==0)
         {
            //gave overflow;
            stopCountDown();
         show("gameover");
         document.getElementById("gameover").innerHTML=`<p>Gameover!</p>
                   <p>Your score is ${score}</p>
         `;
         hide("timeremaining");
         hide("correct");
         hide("wrong");
         playing=false;
         document.getElementById("startreset").innerHTML="Start Game";
        }
     },1000);
}
 function stopCountDown(){
    clearInterval(action);
 }
 //function for generating QA 
  function generateQA(){

    let x = 1+Math.floor(9*Math.random());
    let y = 1+Math.floor(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x + "x"+ y;
    let correctposition=1+Math.round(3 * Math.random());
    //fill the correct box
    document.getElementById("box"+ correctposition).innerHTML=correctanswer;
    //fill the wrong boxes
    var answer=[correctanswer];
    for(i=1;i<=4;i++)
     {
        if(i!=correctposition){
            let wronganswer;
            do{
                wronganswer=(1+Math.floor(9*Math.random()))*(1+Math.floor(9*Math.random()));
            }
            while(answer.indexOf(wronganswer)>-1);
            answer.push(wronganswer);
            document.getElementById("box"+i).innerHTML=wronganswer;

        }
     }

  }
  // if we click on correct answer
  for (i=1;i<=4;i++)
  {
    document.getElementById("box"+i).onclick=function(){
        // if we are playing
        if(playing==true)
        {
            if(this.innerHTML==correctanswer)
            {
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                show("correct");
                hide("wrong");
                setInterval(function(){
                    hide("correct");
                },1000);
                generateQA();
            }
            else{
                //wrong answer
                hide("correct");
                show("wrong");
                setInterval(function(){
                    hide("wrong")
                },1000);
                
            }
        }
    }
  }