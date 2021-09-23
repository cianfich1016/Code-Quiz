//Select element by class or id denoted in index.html.
var viewButton = document.querySelector("button")
var timerElement = document.querySelector(".timerText");
var startButton = document.querySelector(".startButton");
var firstPage = document.getElementById("firstPage");
var scoreEl = document.querySelector("#scores");
var loseEl = document.querySelector("#lose")
var displayScoresEl = document.querySelector("#displayScores")
var quizEl = document.querySelector("#quiz");
var viewEl = document.getElementById("#view");

//Elements created in .js.
var questionsEl = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");
var p = document.createElement("p");
var highscore = document.createElement("h3");
var pscore = document.createElement("p")
var highscoreInput = document.createElement("input");
var submitButton = document.createElement("button")
var lose = document.createElement("h1");
var viewScores = document.createElement("h2");
var viewInitials = document.createElement("h2")
var finalView = document.createElement("p")

//Appending children to parent elements.
scoreEl.appendChild(highscore);
scoreEl.appendChild(pscore);
scoreEl.appendChild(highscoreInput);
scoreEl.appendChild(submitButton);

view.appendChild(finalView);

loseEl.appendChild(lose);

quizEl.appendChild(questionsEl);
quizEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
listEl.appendChild(p);

//Set attributes for various objects.
questionsEl.setAttribute("style", "font-size: 25px")

highscoreInput.setAttribute("type", "text");

li1.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column");
li2.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column");
li3.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column");
li4.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column");
submitButton.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; align: center");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit"

li1.setAttribute("value", "a");
li2.setAttribute("value", "b");
li3.setAttribute("value", "c");
li4.setAttribute("value", "d");


var currentQuestion = 0;
var secondsRemaining = 75;

//Array of quiz questions.
var quizQuestions = [
    {
        question: "Who created JavaScript?",
        answerA: " a. Donald D. Chamberlin",
        answerB: " b. Mark Zuckerberg",
        answerC: "c. Tim Berners-Lee",
        answerD:  " d. Brendan Eich", 
        correctChoice: "d", 
    },
    {
        question: "What functionality does JavaScript provide to websites?",
        answerA: "a. Structure of the page",
        answerB: "b. Styling of the page", 
        answerC: "c. Interactivity of the page", 
        answerD: "d. None of the above",
        correctChoice: "c",
    },
    {
        question: "What marks the end of a JavaScript statement?",
        answerA: "a. semicolon", 
        answerB: "b. comma", 
        answerC: "c. parenthesis", 
        answerD: "d. colon",
        correctChoice: "a",
    },
    {
        question: "All are common data types used EXCEPT which of the following:",
        answerA: "a. boolean", 
        answerB: "b. prompt", 
        answerC: "c. number", 
        answerD: "d. symbol", 
        correctChoice: "b", 
    },
    {
        question: "What function can be used to display any message to the user?",
        answerA: "a. console.view()", 
        answerB: "b. console.filter()", 
        answerC: "c. console.find()", 
        answerD: "d. console.log()",
        correctChoice: "d", 
    },
   
];

//On page load, the quiz is hidden only to be activated by the click of the Start Quiz button.
quizEl.style.display = "none";

//Function that is initiated by Start Quiz button. Main function.
function startQuiz(){
    firstPage.style.display = "none";
    quizEl.style.display = "flex";
    secondsRemaining = 75;
    console.log (currentQuestion)
    startClock();
    displayQuestions();
};

//Function that shows all appropriate questions and answers based on currentQuestion index.
function displayQuestions(){
        questionsEl.textContent = quizQuestions[currentQuestion].question;
        li1.textContent = quizQuestions[currentQuestion].answerA;
        li2.textContent = quizQuestions[currentQuestion].answerB;
        li3.textContent = quizQuestions[currentQuestion].answerC;
        li4.textContent = quizQuestions[currentQuestion].answerD; 
       
};



//Timer function to initiate the countdown of the clock upon the start of the quiz, a lose function if the timer runs out first, a clear of the timer once game is over, and a hold of the finishing score.
function startClock(){
    var timer = setInterval(function() {
        if (secondsRemaining === 0){
            clearInterval(timer);
            loseGame();
        } else if (currentQuestion > quizQuestions.length - 1){
            clearInterval(timer);
        } else{
            secondsRemaining--;
        }
        
        timerElement.textContent = "Time: " + secondsRemaining + " seconds";


    }, 1000);
}

//Added both functions to the list objects to initiate the display of the next question and a comment showing whether or not the previous answer was correct.
li1.addEventListener("click", displayQuestions);
li2.addEventListener("click", displayQuestions);
li3.addEventListener("click", displayQuestions);
li4.addEventListener("click", displayQuestions); 

li1.addEventListener("click", checkAnswerA);
li2.addEventListener("click", checkAnswerB);
li3.addEventListener("click", checkAnswerC);
li4.addEventListener("click", checkAnswerD);

//Function to check answers against the proper question index and its correct choice.
function checkAnswerA(){
    if(quizQuestions[currentQuestion].correctChoice === li1.value){
        p.textContent = "Correct!"
    } else { 
        p.textContent = "Oops! Maybe next time."
        secondsRemaining = secondsRemaining - 10;
    };
    currentQuestion++;
    if (currentQuestion > quizQuestions.length - 1){
        quizEl.style.display = "none";
        displayHighscore();
    return;
   } 
    displayQuestions();
};
function checkAnswerB(){
    if(quizQuestions[currentQuestion].correctChoice === li2.value){
        p.textContent = "Correct!"
    } else { 
        p.textContent = "Oops! Maybe next time."
        secondsRemaining = secondsRemaining - 10;
    };
    currentQuestion++;
    if (currentQuestion > quizQuestions.length - 1){
        quizEl.style.display = "none";
        displayHighscore();
    return;
   } 
    displayQuestions()
};
function checkAnswerC(){
    if(quizQuestions[currentQuestion].correctChoice === li3.value){
        p.textContent = "Correct!"
    } else { 
        p.textContent = "Oops! Maybe next time."
        secondsRemaining = secondsRemaining - 10;
    };
    currentQuestion++;
    if (currentQuestion > quizQuestions.length - 1){
        quizEl.style.display = "none";
        displayHighscore();
    return;
   } 
    displayQuestions()
};

function checkAnswerD(){
    if(quizQuestions[currentQuestion].correctChoice === li4.value){
        p.textContent = "Correct!"
    } else { 
        p.textContent = "Oops! Maybe next time."
        secondsRemaining = secondsRemaining - 10;
    };
    currentQuestion++;
    if (currentQuestion > quizQuestions.length - 1){
        quizEl.style.display = "none";
        displayHighscore();
    return;
   } 
    displayQuestions()
};
        
//Displays scores at the end of the game as well as an input box to save initials.
function displayHighscore(){
    highscore.textContent = "Highscore: " + secondsRemaining;
    pscore.textContent = "Enter initials below to save!"
    scores.style.display = "block";  
}
//If time is down to 0 seconds before all questions answered, this function is called.
function loseGame(){
    quizEl.style.display = "none";
    lose.textContent = "GAME OVER! Better luck next time!"

};

//Able to save initials and store to local storage.
function setScores(){
    var view ={
        score: secondsRemaining,
        initials: highscoreInput.value,
    }
    localStorage.setItem('individual', JSON.stringify(view))

};

//Retrieve scores to alert user should they click the View Highscores button. (This does need improvement to save all high scores.)
function getScores(){
    var finalView = JSON.parse(localStorage.getItem('individual'))  
    window.alert("Highscore: " + finalView.score + " , Initials: " + finalView.initials)

};
viewButton.addEventListener("click", getScores);

submitButton.addEventListener("click", setScores);
startButton.addEventListener("click", startQuiz);

