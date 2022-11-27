const textarea = document.getElementById("editor");
const button = document.querySelector(".button");
console.log(button)

let storageText = localStorage.getItem("key");
if (storageText) {
    textarea.value = JSON.parse(storageText);
};

textarea.oninput = function () {
    console.log(textarea.value);
    localStorage.setItem('key', JSON.stringify(textarea.value));
};

