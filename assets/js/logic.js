const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start");


//show and hide functions
var hide = function (e) {
    e.classList.add("hide")
}
var show = function (e) {
    e.classList.remove("hide")
}

startBtn.addEventListener("click", function () {
    hide(startScreen)
    show(questions)
})

