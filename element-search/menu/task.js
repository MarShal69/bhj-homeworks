const menuLink = document.querySelectorAll(".menu__link");
const arrayMenuLink = Array.from(menuLink);
// console.log(arrayMenuLink);

arrayMenuLink.forEach((el) => {
  el.onclick = function () {
    const parent = el.closest(".menu__item");
    // console.log(parent);
    if (parent.querySelector(".menu_sub")) {
      parent.querySelector(".menu_sub").classList.toggle("menu_active");
      return false;
    };
  };
})

// arrayMenuLink.forEach((el) => {
//   el.onclick = function () {
//     const parent = el.parentElement;
//     // console.log(parent);
//     if (parent.querySelector(".menu_sub")) {
//       parent.querySelector(".menu_sub").classList.toggle("menu_active");
//       return false;
//     };
//   };
// })







