let foundCookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
clickerCounter.textContent1 = Number(clickerCounter.textContent);

let flashingCookie = function flashingCookie() {
    clickerCounter.textContent1 += 1;
    if (clickerCounter.textContent1 % 2 != 0) {
        foundCookie.width = 150;
    } else {
        foundCookie.width = 200;
    };
    clickerCounter.textContent = clickerCounter.textContent1;
};

foundCookie.onclick = flashingCookie;
