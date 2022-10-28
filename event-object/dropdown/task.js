const dropdownList = document.querySelector(".dropdown__list");
// console.log(dropdownList)
const dropdownItems = [...document.querySelectorAll(".dropdown__item")];
const dropdownValue = document.querySelector(".dropdown__value");

function open() {
    dropdownList.classList.add("dropdown__list_active");
    return false;
};

dropdownValue.addEventListener("click", open);

function close() {
    dropdownList.classList.remove("dropdown__list_active");
};
dropdownItems.forEach(el => el.addEventListener("click", close));


dropdownItems.forEach(el => {
    el.onclick = function () {
        dropdownValue.textContent = this.textContent;
        return false;
    };
});

// function value () {
//     dropdownValue.textContent = this.textContent;
//     return event.preventDefault();
// };

// dropdownItems.forEach(el => el.addEventListener("click", value));
