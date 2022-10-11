let holes = [...document.getElementsByClassName("hole")];
console.log(holes);
// let holes = Array.from(document.getElementsByClassName("hole"));
let dead = document.getElementById("dead");
dead.textContent1 = Number(dead.textContent);
let lost = document.getElementById("lost");
lost.textContent1 = Number(lost.textContent);

holes.forEach(function (hole) {
  hole.onclick = function () {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent1 += 1;
      dead.textContent = dead.textContent1;
      if (dead.textContent1 === 10) {
        alert("Победа!");
        dead.textContent = 0;
        dead.textContent1 = 0;
        lost.textContent = 0;
        lost.textContent1 = 0;
      }
    } else {
      lost.textContent1 += 1;
      lost.textContent = lost.textContent1;
      if (lost.textContent1 === 5) {
        alert("Вы проиграли!");
        lost.textContent = 0;
        lost.textContent1 = 0;
        dead.textContent = 0;
        dead.textContent1 = 0;
      };
    };
  };
});