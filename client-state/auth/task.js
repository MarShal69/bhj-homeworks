const signin = document.querySelector(".signin");
const form = document.getElementById("signin__form");
const field = Array.from(document.querySelectorAll(".control"));
const btn = document.querySelector(".btn");
const welcome = document.querySelector(".welcome");
const userId = document.getElementById("user_id");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let text = JSON.parse(xhr.responseText);

            if (text.success === true) {
                field.value = "";
                localStorage.setItem("id", JSON.stringify(text.user_id));
                let storageid = localStorage.getItem("id");
                userId.textContent = storageid;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
            } else {
                alert("Неверный логин/пароль");
                lines();
            };
        };
    });

    const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
    xhr.open("POST", url);

    const formData = new FormData(form);
    xhr.send(formData);
});

function lines() {
    btn.addEventListener("click", (e) => {

        let inputArray = [];
        field.forEach((el) => {
            inputArray.push(el.value);
        });
        localStorage.setItem('key', JSON.stringify(inputArray));
    });

    window.addEventListener("load", () => {
        let inputArray = JSON.parse(localStorage.getItem("key"));
        field.forEach((el, i) => {
            el.value = inputArray[i];
        });
    });
};
