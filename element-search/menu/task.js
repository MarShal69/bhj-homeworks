const menuLink = document.querySelectorAll(".menu__link")
const arrayMenuLink = Array.from(menuLink);
// console.log(arrayMenuLink);

const menuSub = document.querySelectorAll(".menu_sub");
const arrayMenuSub = Array.from(menuSub);
// console.log(arrayMenuSub);

const menuSub1 = document.querySelector(".menu_sub");

arrayMenuLink.forEach((el) => {
  el.onclick = function () {
    if (menuSub + el) {
      menuSub1.classList.add("menu_active");
      // console.log(menuSub1);
      return false;
    };
  };
});