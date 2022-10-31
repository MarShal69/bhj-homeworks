const rotators = document.querySelectorAll(".rotator__case");
const rotatorsArray = [...rotators];
console.log(rotatorsArray);

let i = 0;
setInterval(function () {
    rotatorsArray[i].classList.toggle("rotator__case_active");
    i++;
    if (i >= rotatorsArray.length) {
        i = 0;
    };
    rotatorsArray[i].classList.toggle("rotator__case_active");
}, 1000);