
var myQuestions = [
  new question("What sport's franchise hold the record for most consecutive playoff wins in history?", [  "New York Yankees", "Chicago Bulls", "Los Angeles Lakes","New York Islanders"], "New York Islanders"),
  new question("Which movie at the Oscar's was the first and only movie to win in every category that it was nominated for?", [ "The Lord of the Rings: The Return Of The King", "Gone With The Wind", "Schindler's List", "Titanic"], "The Lord Of The Rings: The Return Of The King"),
  new question("Which is not a blink-182 song?", [ "First Date", "Feeling This", "Kiss and Tell", "The Rock Show"], "Kiss and Tell"),
  new question("In the acclaimed movie the Goonies what was Chunk's real name?", [ "Chuck", "Lawrence", "Jake", "Francis"], "Lawrence")
]
var time = 60




function starTime() {
  var myTimer =  setInterval(function () {
    time --;
    if (time === 0) {
      clearInterval(myTimer)
    }
  })

}



