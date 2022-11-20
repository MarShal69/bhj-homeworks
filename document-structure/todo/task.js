const input = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");
const button = document.querySelector(".tasks__add");

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
  );
  input.value = "";

  const btn = [...document.querySelectorAll(".task__remove")];
  btn.forEach((el) => {
    el.onclick = function () {
      let div = el.closest(".task");
      div.remove()
      return false;
    };
  });
};