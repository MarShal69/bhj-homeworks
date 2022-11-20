const productQuantityControlDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productQuantityControlInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const product = Array.from(document.querySelectorAll(".product"));
const cartProducts = document.querySelector(".cart__products");
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

product.forEach((el) => {
    const productAdd1 = el.querySelector(".product__add");
    productAdd1.onclick = function () {
        const productQuantityValue = el.querySelector(".product__quantity-value")
        let amount = + productQuantityValue.textContent;

        if (amount > 0) {
            let iden = el.getAttribute("data-id");
            let src = el.querySelector(".product__image").getAttribute("src");

            // Проверяем есть ли этот продукт в корзине
            let productsInCard = [...cartProducts.children];
            const productInCard = productsInCard.find(i =>
                i.getAttribute("data-id") === iden);

            if (!productInCard) {
                cartProducts.insertAdjacentHTML("beforeend", `
                <div class="cart__product" data-id = ${iden}>
                    <img class="cart__product-image" src=${src}>
                    <div class="cart__product-count"> ${el.querySelector(".product__quantity-value").textContent}</div>
                </div>
                `);
            } else {
                let cartProductCount = + productInCard.lastElementChild.textContent;
                productInCard.lastElementChild.textContent = cartProductCount + amount;
            };
        };
    };
});