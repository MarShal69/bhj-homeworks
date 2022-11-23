const form = document.getElementById("form");
const progress = document.getElementById("progress");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;
    };
    const url = 'https://netology-slow-rest.herokuapp.com/upload.php';
    xhr.open('POST', url);
    const formData = new FormData(form);
    xhr.send(formData);
});