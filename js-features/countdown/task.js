let time = function () {
    let timer = document.getElementById("timer");
    timer.textContent -= 1
    if (timer.textContent == 0) {
        clearInterval(int);
        alert("Вы победили в конкурсе!");
    };
};
let int = setInterval(time, 1000);
