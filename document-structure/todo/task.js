const input = document.querySelector(".tasks__input");
console.log(input);
const tasksList = document.querySelector(".tasks__list");
console.log(tasksList);
// const button = document.querySelector(".tasks__add");
// console.log(button);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    tasks();
  };
  // return event.preventDefault;
});


function tasks() {
  tasksList.innerHTML += `
    <div class="task">
  <div class="task__title">${input.value}</div>
  <a href="#" class="task__remove">&times;</a>
</div>
      `
};

// function tasks() {
//   tasksList.insertAdjacentHTML("beforeend",
//     <div class="task">
//       <div class="task__title">${input.value}</div>
//       <a href="#" class="task__remove">&times;</a>
//     </div>
//   )
// };