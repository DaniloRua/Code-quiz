const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start")
let timer = document.getElementById("time");
let count = 2;

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
})

//timer
function startTimer() {

    const time = setInterval(function () {
    count--;
    timer.innerHTML = count

//penalties...

        if (count === 0) {
            clearInterval(time)
    
        }
    }, 1000);


}
