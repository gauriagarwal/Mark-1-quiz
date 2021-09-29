var readlineSync = require('readline-sync')
var userName = readlineSync.question("What's your name?\n")

console.log("\nHello!, Welcome to the quiz, " + userName + "\nPlease answer in y/n\n")

var score = 0;

//define function
function play(ques,ans)
{
  var userAns = readlineSync.question(ques);

  if (userAns.toLowerCase() === ans){
    console.log("You are right!")
    score = score + 1
  }
  else{
    console.log("You are wrong!")
    score = score - 1
  }
  console.log("Your score is " + score)
}

//array of objects
var questions = [{
  question: "Am I a working professional?\n",
  answer: "y"
},{
  question: "\nHave I ever binge watched a series for straight 16 hours?\n",
  answer: "y"
},{
  question: "\nDo I like to code?\n",
  answer: "y"
},{
  question: "\nDo I have a tattoo?\n",
  answer: "n"
},{
  question: "\nAm I a foodie?\n",
  answer: "y"
}]

//loop
for (var i=0; i<questions.length; i=i+1)
{
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}