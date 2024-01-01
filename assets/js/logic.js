const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start")
const questions = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let timer = document.getElementById("time");
const endScreen = document.getElementById("end-screen")
let count = 75;
// maximum 10 questions
let numberOfQuestions = ''

// sounds
var correctSound = new Audio("./assets/sfx/correct.wav");
var incorrectSound = new Audio("./assets/sfx/incorrect.wav")

//show and hide functions
var hide = function (e) {
    e.classList.add("hide")
}
var show = function (e) {
    e.classList.remove("hide")
}

//start button
startBtn.addEventListener("click", function () {
    hide(startScreen);
    startTimer();
    show(questions)
    getQuestions()
    numberOfQuestions++
})

//timer
function startTimer() {

    var time = setInterval(function () {
        count--;
        timer.innerHTML = count;
        if (count === 0) {
            clearInterval(time)
            show(endScreen)
            hide(questions)
        }
    }, 1000);
}
//populate the questions
function getQuestions() {
    //clear before populate
    choices.innerHTML = '';
    // get a random index
    let random = Math.floor((Math.random() * 26) + 1);
    questionTitle.textContent = questionsAndAnswers[random].question
    let answersContainer = questionsAndAnswers[random].answers
    let rightAnswer = questionsAndAnswers[random].correctIndex + 1

    for (let i = 0; i < answersContainer.length; i++) {
        let number = i
        var button = document.createElement("button")
        button.textContent = number + 1 + ". " + answersContainer[i]
        choices.appendChild(button)
        button.addEventListener("click", function () {
            //check the answer
            //right
            if (i + 1 === rightAnswer) {
                correctSound.play()
                if (numberOfQuestions === 11) {
                    show(endScreen)
                    hide(questions)
                    hide(timer)
                } else {
                    numberOfQuestions++
                    getQuestions()
                }
                //wrong
            } else {
                //penalties
                incorrectSound.play()
                if (numberOfQuestions === 11) {
                    show(endScreen)
                    hide(questions)
                    hide(timer)
                } else {
                    numberOfQuestions++
                    getQuestions()
                    count -= 10
                }

                if (count <= 0) {
                    show(endScreen)
                    hide(questions)
                    hide(timer)
                }
            }
        }
        )
    }
}


