const loader = document.querySelector(".loader");
const items = document.getElementById("items");
const item = document.querySelector(".item");


const xhr = new XMLHttpRequest();
// сщздаём объект класса
xhr.addEventListener('readystatechange', () => {

    if (xhr.readystate === xhr.DONE) {
        // если запрос выполнен, то 
        loader.classList.remove('loader_active');  // убираем активный класс у img
        console.log(xhr.responseText); // на всякий случай смотрю в консоли, что загрузилось и ничего не вижу
        let text = JSON.parse(this.responseText); // превращаем в объект JS
        console.log(text);  // опять ничего нет


        // обегаем ассщциативный массив  Valute и вставляем в HTML код с полученными из Valute данными
        Valute.forEach((element, i) => {
            items.insertAdjacentElement("afterbegin", `
            <div class="item__code">
                            ${element[i].CharCode}
                        </div>
                        <div class="item__value">
                        ${element[i].Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>
            `
            );
        });
    };
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();