//my questions 
var questions = [{
  question: "What sports franchise holds the record for most consecutive playoff wins?",
  answers: ["Chicago Bulls", "Los Angeles Lakers", "New York Islanders","New York Yankees"],
  correctAnswer: "New York Islanders",
  
}, {
  question: "Who cut the cut ring from Sauron's hand?",
  answers: ["Frodo", "Isildur", "Gimli", "Gandalf"],
  correctAnswer: "Isildur",
  
}, {
question: "Who was Bruce Lee's master?",
  answers: ["Jackie Chan", "Ip Man", "Wong Fei-Hung", "Sammo Hung"],
  correctAnswer: "Ip Man",
  
},

];
//WHEN I click the start button
var startButton = document.getElementById("startBtn")

function initialize() {
  startButton.style.display = "Start"
}
//THEN a timer starts and I am presented with a question
var timeEl = document.querySelector("Time")
var secondsLeft = 60

function startTime () {
  var myTimer = setInterval(function (){
    secondsLeft --;
    if (secondsLeft === 0) {
      clearInterval(myTimer)
    }
  })
}

function firstQuestion () {
  alert("first question!")

}
//WHEN I answer a question
if(firstQuestion !== )

//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
