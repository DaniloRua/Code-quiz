const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start")
const questions = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let timer = document.getElementById("time");
const endScreen = document.getElementById("end-screen")
let count = 75;


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
})

//timer
function startTimer() {

    const time = setInterval(function () {
        count--;
        timer.innerHTML = count

        //penalties...

        if (count === 0) {
            clearInterval(time)
            show(endScreen)
            hide(questions)
        }
    }, 1000);

}



//populated the questions
function getQuestions(){


    questionTitle.textContent = questionsAndAnswers[0].question
    let answersContainer = questionsAndAnswers[0].answers
    
    for (let i = 0; i < answersContainer.length; i++) {
        let number = i

        var button = document.createElement("button")
        button.textContent = number+1 + ". " + answersContainer[i]
        choices.appendChild(button)
    }
   
   
}

