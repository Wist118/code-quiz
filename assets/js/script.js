var startBtn = document.querySelector("#start");
var quizTitle = document.querySelector(".quiz-title");
var quizInit = document.querySelector("#quiz-init");
var quizFirst = document.querySelector("#quiz-one");
var questions = document.querySelector("#questions");
const first = document.querySelector("#a1");
const second = document.querySelector("#a2");
const third = document.querySelector("#a3");
const fourth = document.querySelector("#a4");
var result = document.querySelector("#right-wrong");
var infoBody = document.querySelector(".info-body");
var infoTitle = document.querySelector(".info-title");
var time = document.querySelector("#timer");
var saveScore = document.querySelector("#save");
var leader = document.querySelector(".highscore");


quizFirst.hidden = true;
saveScore.hidden = true;


var startQuiz = function(timer) {
    quizInit.hidden = true;
    quizFirst.hidden = false;
    quizTitle.textContent = "Question 1";
    questions.textContent = "What is the NUMBER data type represent?";
    first.textContent = "Represents both integer and floating-point values";
    second.textContent = "cashews";
    third.textContent = "peanuts";
    fourth.textContent = "maybe almonds";
    result.textContent = ""

    var count = 30;
    var interval = setInterval(function(){
    time.innerHTML=count;
    count--;
    if (count === 0){
        clearInterval(interval);
        time.innerHTML='Done';
        oot();
        }
    }, 1000);


        first.onclick = function() {
            secondQuestion();
        }

        second.onclick = function () {
            result.textContent = "Try Again";
            count -= 2
        };

        third.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };

        fourth.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };



    var secondQuestion = function() {
        quizInit.hidden = true;
        quizFirst.hidden = false;
        quizTitle.textContent = "Question 2";
        questions.textContent = "What does the data type NULL represent?";
        first.textContent = "Absolutly nothing";
        second.textContent = "Represents empty, nothing, and unknown type of values";
        third.textContent = "Definitely made up";
        fourth.textContent = "Its not this choice";
        result.textContent = ""

        first.onclick = function() {
            result.textContent = "Try Again";
            count -= 2;
        }

        second.onclick = function () {
            thirdQuestion();
        };

        third.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };

        fourth.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };
    }

    var thirdQuestion = function() {
        quizInit.hidden = true;
        quizFirst.hidden = false;
        quizTitle.textContent = "Question 3";
        questions.textContent = "What is the OBJECT data type used for?";
        first.textContent = "Nothing. OBJECT is not a data type";
        second.textContent = "Used to store pizza";
        third.textContent = "I'm not sure";
        fourth.textContent = "Storing collections of data or more complex entities";
        result.textContent = ""

        first.onclick = function() {
            result.textContent = "Try Again";
            count -= 2;
        }

        second.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };

        third.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };

        fourth.onclick = function () {
            fourthQuestion();
        };
    }

    var fourthQuestion = function() {
        quizInit.hidden = true;
        quizFirst.hidden = false;
        quizTitle.textContent = "Question 4";
        questions.textContent = "What does the Boolean value represent?";
        first.textContent = "Only true values";
        second.textContent = "Only false values";
        third.textContent = "True and false values";
        fourth.textContent = "Nothing. its a made up word";
        result.textContent = ""

        first.onclick = function() {
            result.textContent = "Try Again";
            count -= 2;
        }

        second.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };

        third.onclick = function () {
            endQuiz();
        };

        fourth.onclick = function () {
            result.textContent = "Try Again";
            count -= 2;
        };
    }

    var endQuiz = function() {
        quizInit.hidden = false;
        saveScore.hidden = false;
        quizFirst.hidden = true;
        var score = count + 1
        result.textContent = ""
        startBtn.textContent = "Try Again"
        quizTitle.textContent = "GREAT JOB!"
        infoTitle.textContent = "Your Score"
        infoBody.textContent = "You have earned a score of "  + score +  ". If you would like to try again click the button below or enter your initials to save your new score!!"
        clearInterval(interval);

        saveScore.onclick = function() {
            var initials = prompt("Please enter your initials");
            localStorage.setItem("highscore", score);
            localStorage.setItem("name", initials);
            var highScore = localStorage.getItem("highscore");
            var name = localStorage.getItem("name")

            leader.textContent = name + "  "  + highScore;
        }

    }

    var oot = function() {
        quizInit.hidden = false;
        quizFirst.hidden = true;
        result.textContent = ""
        startBtn.textContent = "Try Again"
        quizTitle.textContent = "OH NO! You Ran Out of Time!"
        infoTitle.textContent = "Your Score"
        infoBody.textContent = "You have earned a score of 0 because you ran out of time! Click the button below if you like to try again!!"

    }
};





startBtn.addEventListener("click", startQuiz);