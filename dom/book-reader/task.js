const fontSize = document.querySelectorAll(".font-size");
const fontSizeArray = [...fontSize];
const book = document.querySelector(".book");

fontSizeArray.forEach((el) => {
    el.onclick = function () {
        if (p = document.querySelector(".font-size_active")) {
            p.classList.toggle("font-size_active");
        };
        el.classList.add("font-size_active");

        if (el.classList.contains("font-size_big")) {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else if (el.classList.contains("font-size_small")) {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
        };
        return false;
    };
});