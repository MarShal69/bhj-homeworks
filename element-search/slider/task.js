const slider = document.getElementsByClassName("slider__item");
const arrayslider = Array.from(slider);
// console.log(arrayslider);
const slider__arrow_next = document.querySelector(".slider__arrow_next");
const slider__arrow_prev = document.querySelector(".slider__arrow_prev");

let sliderNumber = 0;
slider__arrow_next.onclick = function () {
    if (arrayslider[sliderNumber].classList.contains("slider__item_active")) {
        arrayslider[sliderNumber].classList.remove("slider__item_active");
    };

    arrayslider[sliderNumber + 1].classList.add("slider__item_active");
    // console.log(arrayslider);

    console.log(arrayslider.length);
    if (sliderNumber < arrayslider.length - 1) {
        sliderNumber = sliderNumber + 1;
        // console.log(sliderNumber);
    } else {
        sliderNumber = 0;
        arrayslider[sliderNumber].classList.add("slider__item_active");
        // arrayslider[sliderNumber].classList.remove("slider__item_active");
        console.log(arrayslider);
    }
};


let sliderLastNumber = arrayslider.length;
slider__arrow_prev.onclick = function () {

    if (arrayslider[sliderNumber].classList.contains("slider__item_active")) {
        arrayslider[sliderNumber].classList.remove("slider__item_active");
        arrayslider[sliderNumber - 1].classList.add("slider__item_active");
    };
    console.log(arrayslider);
    console.log(arrayslider.length);
    if (sliderNumber > 0) {
        sliderNumber = sliderNumber - 1;
        // console.log(sliderNumber)
    } else {
        sliderNumber = arrayslider.length;
        arrayslider[sliderNumber - 1].classList.add("slider__item_active");
        arrayslider[sliderNumber].classList.remove("slider__item_active");
        // console.log(arrayslider);
    }
}





















