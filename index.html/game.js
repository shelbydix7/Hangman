// Questions to display for game
var getQuestions = [
    { question: "When was the Rick and Morty pilot aired?", answer: "December 2nd, 2013" },
    { question: "What is a 'schmeckle'?", answer: "A currency" },
    { question: "What are the ‘Ball Fondlerz’?", answer: "Rick and Morty's favorite show" },
    { question: "What is the name of Morty's highschool?", answer: "Harry Hempson" },
    { question: "What animal does Rick use for Morty's love potion?", answer: "A vole" },
    { question: "What is the dimension of Real Rick?", answer: "C-137" },
    { question: "What is the vampire gym teacher's name?", answer: "Coach Feratu" },
    { question: "What cereal do the Smith's eat?", answer: "Strawberry Smiggles" },
    { question: "What is Jerry's favorite movie?", answer: "The Titanic" },
    { question: "What is Beth's job?", answer: "Horse surgeon" },
  
];

var guessRemaining = 0;
var guesses = [];
var correctGuesses = [];
var wrongGuesses = [];
var currentQuestion;
var display = ''; 
var score = 0;

var ask = document.getElementById("ask");
var section = document.getElementById("section");
var total = document.getElementById("total");


// create functions...


function startUp() { 
  return getQuestions[Math.floor(Math.random() * getQuestions.length)];
  
 }

function restart(){

  
    guessRemaining = 7;
    guesses = [];
    currentQuestion = startUp();
    display = '';
    score = 0;
    

    for (var i = 0; i < currentQuestion.answer.length; i++){
      if (currentQuestion.answer.charAt(i) !== " "){
         display += "_";
        //  guessRemaining += 1;

      }

      else {
        display += " ";
      }
    }

    section.textContent = display;

    ask.textContent = currentQuestion.question;
  }

    document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var answer  = currentQuestion.answer.toLowerCase();
    // console.log(event.key);
   
    for (var i = 0; i < guesses.length; i++) {
      
        if (guesses[i] === event.key) {
         
          return;
        }

      }
      // console.log("Past duplicate check")
      guesses.push(event.key);
      // console.log(guesses);

      console.log(answer, userGuess)


    if (answer.indexOf(userGuess)) {

        correctGuesses.push(event.key);
    }

    else {

      wrongGuesses.push(event.key);
    }

    console.log('arrays', correctGuesses, wrongGuesses);


    var hiddenAnswer = '';
    var correct_guess = false;

    for (var i = 0; i < currentQuestion.answer.length; i++) {


    if (userGuess === currentQuestion.answer.charAt(i)) {
        hiddenAnswer += answer.charAt(i);
        // correctGuesses += currentQuestion.answer.charAt(i);
        correct_guess = true;
        

       }
       else {
         hiddenAnswer += display.charAt(i);
         guessRemaining--; 
       }
    }
       // console.log
    if (correct_guess === false) {
      guessRemaining++;
      
      
      if (guessRemaining === 7 ){

      }
    }


    section.textContent = hiddenAnswer;

    total.textContent = score;

 if (score === 0) {


 }

}



restart();