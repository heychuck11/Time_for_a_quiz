//my questions 
var questions = [
  {
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
  
}, {
  question: "who wrote the novel Dracula?",
  answers: ["Bram Stoker", "Mary Shelly", "Stephen King", "Mario Puzo"],
  correctAnswer: "Bram Stoker",
}, {
  question: "Which director made the movie Avatar?",
  answers: ["Steven Spielberg", "James Cameron", "Ridley Scott", "Christopher Nolan"],
  correctAnswer: "James Cameron",
}

];
var startScreenEl = document.getElementById("start-screen")
var choicesEl = document.getElementById("choices")
var questionTitleEl = document.getElementById("question-title")
var endScreenEl = document.getElementById("end-screen")
var timerId ;
var feedBackEl = document.getElementById("feedback")
var questionIdx = 0;
var secondsLeft = 60;
var currentScore = 0;
var initials =""
var timeEl = document.getElementById("time")
//WHEN I click the start button, load the first question
var startButton = document.getElementById("start");


  function startQuiz(){
    timerId = setInterval(startTimer, 1000)
    timeEl.textContent = secondsLeft
    displayQuestion();
  }
document.body.appendChild(startButton)




console.log("Start")

// Event listener for start button; when button is clicked start timer 



//Uses set interval to start the timer
function startTimer(){
  
    secondsLeft--;
    timeEl.textContent = secondsLeft
    if (secondsLeft <= 0) {
      clearInterval(timerId)
      endQuiz()
    }
  
}

// Gets the current question index and displays question & answers on the screen
function displayQuestion(){

  // Display the question by getting the current question index
  // and pull that object from the array
  var currentQuestion = questions[questionIdx];

  // Display question 
  questionTitleEl.textContent = currentQuestion.question
  choicesEl.innerHTML = ""
  currentQuestion.answers.forEach(function(answer){
    var answerButton = document.createElement("button")
    answerButton.setAttribute("class", "choice")
    answerButton.setAttribute("value", answer)
    answerButton.textContent = answer
    answerButton.onclick = questionClicked
    choicesEl.appendChild(answerButton)

  })

  
}
// when the user clicks anwser and it deducts the time if wrong
function questionClicked(){
  if(this.value !== questions[questionIdx].correctAnswer){
    secondsLeft = secondsLeft -15
    if(secondsLeft < 0 ){
      secondsLeft = 0
    }
    timeEl.textContent = secondsLeft
    feedBackEl.textContent = "You chose wrong!"
  } else {
    feedBackEl.textContent = "You got it right!"
  }
  questionIdx++
  if(questionIdx === questions.length){
    endQuiz()
  } else {
    displayQuestion()

  }

}

// Create an event listener for when any answer is clicked
// Listener should also see if the answer is correct

localStorage.setItem("initials", initials);



function endQuiz(){
  endScreenEl.removeAttribute("class")

}



//THEN a timer starts and I am presented with a question






startButton.onclick = startQuiz