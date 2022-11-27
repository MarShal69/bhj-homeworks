const modal = document.querySelector('.modal');
const modalClose = document.querySelector(".modal__close")

// document.cookie = "modalActive=; Expires=Thu, 01 Jan 1970 00:00:0 GMT";

const pairs = document.cookie.split("; ")
let cookie = pairs.find((i) => i.startsWith("modalActive" + '='));

if (!cookie) {
    modal.classList.add("modal_active");
} else {
    modal.classList.remove("modal_active");
};

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    document.cookie = "modalActive = no"
    event.preventDefault();
});




