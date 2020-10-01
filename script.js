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
  
},

];

var questionIdx = 0;
var secondsLeft = 60;
var currentScore = 0;

//WHEN I click the start button, load the first question
var startButton = document.createElement("button");
startButton.innerHTML ="Start Quiz";


  function startQuiz(){
    startButton.addEventListener("click" + questionIdx)
  }
document.body.appendChild(startButton)




console.log("Start")

// Event listener for start button; when button is clicked start timer 



//Uses set interval to start the timer
function startTimer(){
  var myTimer = setInterval(function (){
    secondsLeft --;
    if (secondsLeft === 0) {
      clearInterval(myTimer)
    }
  }, 1000);
  displayQuestion();
}

// Gets the current question index and displays question & answers on the screen
function displayQuestion(){
  // Display the question by getting the currenr question index
  // and pull that object from the array
  var questionObj = questions[questionIdx];

  // Display question title

  // Loop through the answers
     // Create a button for each answer
     // Check if the button being created is the correct answer or not
     // Create a custom attribute to show if it's correct or not

  // Append everything to the page

}

// Create an event listener for when any answer is clicked
// Listener should also see if the answer is correct

function answerIsCorrect(){


  questionIdx++
  displayQuestion();
}

function answerIsWrong(){

  questionIdx++;
  displayQuestion();
}


function initialize() {
  startButton.style.display = "Start"
}
//THEN a timer starts and I am presented with a question






//WHEN I answer a question

//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score
