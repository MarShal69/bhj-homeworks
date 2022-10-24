const slider = document.getElementsByClassName("slider__item");
const arraySlider = Array.from(slider);
// console.log(arrayslider);
const sliderNext = document.querySelector(".slider__arrow_next");
const sliderPrev = document.querySelector(".slider__arrow_prev");

let sliderNumber = 0;

sliderNext.onclick = function () {
    sliderNumber++;
    check();
    document.getElementsByClassName("slider__item_active")[0].classList.remove("slider__item_active");
    arraySlider[sliderNumber].classList.add("slider__item_active");
};

sliderPrev.onclick = function () {
    sliderNumber--;
    check();
    document.getElementsByClassName("slider__item_active")[0].classList.remove("slider__item_active");
    arraySlider[sliderNumber].classList.add("slider__item_active");
};

//  ПРОВЕРКА
function check() {
    if (sliderNumber >= arraySlider.length) {
        sliderNumber = 0;
    };

    if (sliderNumber < 0) {
        sliderNumber = arraySlider.length - 1;
        console.log(sliderNumber);
        arraySlider[sliderNumber].classList.add("slider__item_active");
    };
};

