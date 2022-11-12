const input = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const button = document.querySelector(".tasks__add");
const btn = document.querySelectorAll(".task__remove");
const task = document.querySelectorAll(".task");

button.onclick = function () {
  tasks();
  return false;
};

function tasks() {
  tasksList.insertAdjacentHTML("beforeend", `
    <div class="task">
      <div class="task__title">${input.value}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
  )
};

// или так
// function tasks() {
//   tasksList.innerHTML += `
//     <div class="task">
//   <div class="task__title">${input.value}</div>
//   <a href="#" class="task__remove">&times;</a>
// </div>
//       `
// };

btn.onclick = function () {
  let div = btn.parentElement.parentElement;
  div.removeChild(task);
  return false;
};