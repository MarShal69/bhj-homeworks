const tabs = document.querySelectorAll(".tab");
const arrayTabs = Array.from(tabs);
const active = document.querySelectorAll(".tab_active");

const tabContents = document.querySelectorAll(".tab__content");
const arrayTabContents = Array.from(tabContents);

arrayTabs.forEach((el, i) => {
    el.onclick = function () {
        if (p = document.querySelector(".tab_active")) {
            p.classList.toggle("tab_active")
        };

        el.classList.add("tab_active");
        let index = i;
        if (p = document.querySelector(".tab__content_active")) {
            p.classList.toggle("tab__content_active")
        };

        arrayTabContents[index].classList.add("tab__content_active");
    };
});








