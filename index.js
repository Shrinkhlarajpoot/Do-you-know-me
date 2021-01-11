var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "tanya",
    score: 6,
  },

  {
    name: "reecha",
    score: 5,
  },
  ,

  {
    name: "Aditi",
    score: 4,
  }
]

// array of objects
var questions = [{
  question: "Where do I live?",
  answer: "Khurai"
  }, {
  question: "Whom I love the most?",
  answer: "Father"
},
{
  question: "movies or books?",
  answer: "movies"
},
{
  question: "My favourite color?",
  answer: "Black"
},
{
  question: "My favourite Season?",
  answer: "Summers"
},
{
  question: "My favourite model?",
  answer: "Gigi Hadid"
},
{
  question: "What genre og movies i watch the most?",
  answer: "Drama"
}
];
function welcome() {
 var userName = readlineSync.question("Hey, What's your  good name? ");

  console.log("Welcome "+ userName + " to Do you know me QUIZ? Try your best ");
  console.log("-----------------------");
  console.log("So, here we go ->");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("Correct Answer is " + answer);
    score--;
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
     play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("These are the High Scores:")
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();