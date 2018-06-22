// Questions to display for game
var questions = [
    { q: "When was the Rick and Morty pilot aired?", a: "December 2nd, 2013" },
    { q: "What is a 'schmeckle'?", a: "A currency" },
    { q: "What are the ‘Ball Fondlerz’?", a: "Rick and Morty's favorite show" },
    { q: "What is the name of Morty's highschool?", a: "Harry Hempson" },
    { q: "What animal does Rick use for Morty's love potion?", a: "A vole" },
    { q: "What is the dimension of Real Rick?", a: "C-137" },
    { q: "What is the vampire gym teacher's name?", a: "Coach Feratu" },
    { q: "What cereal do the Smith's eat?", a: "Strawberry Smiggles" },
    { q: "What is Jerry's favorite movie?", a: "The Titanic" },
    { q: "What is Beth's job?", a: "Horse surgeon" }
  
];

var guessRemaining = 7;
var guesses = [];
var correctGuesses = [];
var wrongGuesses = [];
var currentQuestion;
var display = ''; 
var score = 0;

var audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");

var ask = document.getElementById("ask");
var section = document.getElementById("section");
var total = document.getElementById("total");


// create functions...


function startUp() { 
  return getQuestions[Math.floor(Math.random() * getQuestions.length)];
  
 }




  function restart(){

    audio.pause();
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

    audio = new Audio("assets/audio/The_Simpsons_Opening.mp3");
        audio.play();
   
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