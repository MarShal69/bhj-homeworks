const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.getElementsByClassName("show-success");
// const modalCloseTimes = document.getElementsByClassName("modal__close_times");
let array = Array.from(document.getElementsByClassName("modal__close_times"));
console.log(array);

modalMain.classList.add("modal_active");
// let toCloseOne = modalCloseTimes.item(0);
// console.log(toCloseOne);
// toCloseOne.onclick = function () {
//     modalMain.classList.remove("modal_active");
// };
 
let informationButton1 = showSuccess.item(0);
console.log(informationButton1);
informationButton1.onclick = function () {
    modalSuccess.classList.add("modal_active");
};

// let toCloseTwo = modalCloseTimes.item(1);
// console.log(toCloseTwo);
// toCloseTwo.onclick = function () {
//     modalMain.classList.remove("modal_active");
//     modalSuccess.classList.remove("modal_active");
// }

closed ();

 function  closed () {
array.forEach(function (element) {
    element.onclick = function () {
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    }
})
}

