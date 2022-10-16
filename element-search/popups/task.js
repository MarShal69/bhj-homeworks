const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.getElementsByClassName("show-success");
let array = Array.from(document.getElementsByClassName("modal__close_times"));

modalMain.classList.add("modal_active");
 
let informationButton1 = showSuccess.item(0);
console.log(informationButton1);
informationButton1.onclick = function () {
    modalSuccess.classList.add("modal_active");
};

closed ();

 function  closed () {
array.forEach(function (element) {
    element.onclick = function () {
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    };
});
}