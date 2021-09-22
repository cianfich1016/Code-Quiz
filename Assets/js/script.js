//Select element by class denoted in index.html.
var timerElement = document.querySelector(".timerText");
var startButton = document.querySelector(".startButton");
var firstPage = document.getElementById("firstPage");

var quizEl = document.querySelector("#quiz");
var questionsEl = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");

quizEl.appendChild(questionsEl);
quizEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

questionsEl.setAttribute("style", "font-size: 25px")

li1.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column")
li2.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column")
li3.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column")
li4.setAttribute("style", "margin: 3px; padding: 7px; background-color: purple; color: white; font-size: 15px; display: flex; flex-direction: column")

var currentQuestion = 0;
var secondsRemaining = 75;

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
        answerA: "a.Structure of the page",
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

quizEl.style.display = "none";

function startQuiz(){
    firstPage.style.display = "none";
    quizEl.style.display = "flex";
    secondsRemaining = 75;
    startClock();
    displayQuestions();
};

function displayQuestions(){
    
    for(var i=0; i < quizQuestions.length; i++){
        questionsEl.textContent = quizQuestions[currentQuestion].question;
        li1.textContent = quizQuestions[currentQuestion].answerA;
        li2.textContent = quizQuestions[currentQuestion].answerB;
        li3.textContent = quizQuestions[currentQuestion].answerC;
        li4.textContent = quizQuestions[currentQuestion].answerD;
        i++;
    }  
   
    //var correctChoice = quizQuestions[currentQuestion].correctChoice;     
};




function startClock(){
    var timer = setInterval(function() {
        secondsRemaining--;
        timerElement.textContent = "Time: " + secondsRemaining + " seconds";
        if (secondsRemaining === 0){
            clearInterval(timer);
        }

    }, 1000);
}




li1.addEventListener("click", displayQuestions);
li2.addEventListener("click", displayQuestions);
li3.addEventListener("click", displayQuestions);
li4.addEventListener("click", displayQuestions); 

function buttonclick(){
    console.log("yay")
}
startButton.addEventListener("click", startQuiz);
