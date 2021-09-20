//Select element by class denoted in index.html.
var timerElement = document.querySelector(".timerText");
var startButton = document.querySelector(".startButton");
var firstPage = document.getElementById("firstPage");
var quiz = document.getElementById("quiz");



var secondsRemaining = 75;

var quizQuestions = [
    {
        question: "Who created JavaScript?",
        answers: {
            1: "Donald D. Chamberlin",
            2: "Mark Zuckerberg",
            3: "Tim Berners-Lee",
            4: "Brendan Eich",
        } , 
        correctChoice: "4", 
    },
    {
        question: "What functionality does JavaScript provide to websites?",
        answers: {
            1: "Structure of the page",
            2: "Styling of the page",
            3: "Interactivity of the page",
            4: "None of the above",
        } , 
        correctChoice: "3", 
    },
    {
        question: "What marks the end of a JavaScript statement?",
        answers: {
            1: "semicolon",
            2: "comma",
            3: "parenthesis",
            4: "colon",
        },
        correctChoice: "1",
    },
    {
        question: "All are common data types used EXCEPT which of the following:",
        answers: {
            1: "boolean",
            2: "prompt",
            3: "number",
            4: "symbol",
        } , 
        correctChoice: "2", 
    },
    {
        question: "What function can be used to display any message to the user?",
        answers: {
            1: "console.view())",
            2: "console.filter()",
            3: "console.find()",
            4: "console.log()",
        } , 
        correctChoice: "4", 
    },
   
];

function startQuiz(){
    firstPage.style.display = "none";
    secondsRemaining = 75;
    startClock();
    startQuestions();
}

function startQuestions(){
    
        
}

function startClock(){
    var timer = setInterval(function() {
        secondsRemaining--;
        timerElement.textContent = "Time: " + secondsRemaining + " seconds";
        if (secondsRemaining === 0){
            console.log ("lose")
            clearInterval(timer);
        }

    }, 1000);
}





startButton.addEventListener("click", startQuiz);