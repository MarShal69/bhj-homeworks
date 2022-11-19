const productQuantityControlDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productQuantityControlInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const product = Array.from(document.querySelectorAll(".product"));
// console.log(product);
const cartProducts = document.querySelector(".cart__products");
// console.log(cartProducts)
const productAdd = document.querySelector(".product__add")

productQuantityControlInc.forEach((el) => {
    el.addEventListener("click", () => {
        const productQuantityValue = el.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        let amount = + productQuantityValue.textContent;
        amount += 1;
        productQuantityValue.textContent = amount;
    });
});

productQuantityControlDec.forEach((el) => {
    el.addEventListener("click", () => {
        const productQuantityValue = el.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        let amount = + productQuantityValue.textContent;
        if (amount > 0) {
            amount -= 1;
            productQuantityValue.textContent = amount;
        };
    });
});


// перебираем карточки продуктов, находим кнопки "Добавить в корзину"
product.forEach((el) => {
    const productAdd1 = el.querySelector(".product__add");
    // при нажатии на кнопку
    productAdd1.onclick = function () {
        const productQuantityValue = el.querySelector(".product__quantity-value")
        let amount = + productQuantityValue.textContent; // выявляем количество продукта и переводим в цифру

        if (amount > 0) {        // если количество продукта > нуля
            let iden = el.getAttribute("data-id");  // находим его id
            let src = el.querySelector(".product__image").getAttribute("src"); // и изображение


            // Проверяем есть ли этот продукт в корзине

            let productsInCard = [...cartProducts.children];   // находим продукты в корзине и формируем из них массив

            // ищем в корзине с продуктами добавляемый элемент по id
            const productInCard = productsInCard.find(i => {
                i.getAttribute("data-id") === iden;
                // i[data-id] === el[iden]
            });

            // Если элемента в корзине нет, то добавляем его в корзину
            if (!productInCard) {
                cartProducts.insertAdjacentHTML("beforeend", `
                <div class="cart__product" data-id = ${iden}>
                    <img class="cart__product-image" src=${src}>
                    <div class="cart__product-count"> ${el.querySelector(".product__quantity-value").textContent}</div>
                </div>
                `);
            }
            else {// а если он уже есть в корзине, то находим в корзине его количество, переводим в цифру и прибавляем к к этому количеству количество добавляемого продукта
                let productInCardValue = + productInCard.textContent;
                productInCardValue = productInCardValue + amount;
            };
        };
    };
});








// product.forEach((el) => {
//     const productAdd1 = el.querySelector(".product__add");

//     productAdd1.onclick = function () {
//         const productQuantityValue = el.querySelector(".product__quantity-value")
//         let amount = + productQuantityValue.textContent;

//         if (amount > 0) {
//             let iden = el.getAttribute("data-id");
//             let src = el.querySelector(".product__image").getAttribute("src");
//             cartProducts.insertAdjacentHTML("beforeend", `
//     <div class="cart__product" data-id = ${iden}>
//         <img class="cart__product-image" src=${src}>
//         <div class="cart__product-count"> ${el.querySelector(".product__quantity-value").textContent}</div>
//     </div>
//     `);
//         };
//     };
// });
