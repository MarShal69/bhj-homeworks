const loader = document.querySelector(".loader");
const items = document.getElementById("items");
const item = document.querySelector(".item");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');  // 
        let text = JSON.parse(this.responseText);
        console.log(text);

        for (const i in text.response.Valute) {
            items.insertAdjacentHTML("afterbegin", `
            <div class="item">
                <div class="item__code">
                    ${text.response.Valute[i].CharCode}
                </div>
                <div class="item__value">
                    ${text.response.Valute[i].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>
            `
            );
        };
    };
};

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();