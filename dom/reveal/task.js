const reveal = document.querySelectorAll(".reveal");
const revealArray = Array.from(reveal);

revealArray.forEach(el => {
    document.addEventListener("scroll", function () {
        const top = el.getBoundingClientRect().top;
        const bottom = el.getBoundingClientRect().bottom;

        if (bottom > 0 && top < window.innerHeight) {
            el.classList.add("reveal_active");
        };
    });
});