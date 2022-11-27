const textarea = document.getElementById("editor");


let storageText = localStorage.getItem("key");
if (storageText) {
    textarea.value = JSON.parse(storageText);
};

textarea.oninput = function () {
    localStorage.setItem('key', JSON.stringify(textarea.value));
};

