const checkBoxes = [...document.querySelectorAll(".interest__check")];

checkBoxes.forEach((el) => {
    el.addEventListener("click", () => {

        const closest = el.closest("label");

        if (closest.nextElementSibling) {
            const checkBox = [...closest.nextElementSibling.querySelectorAll(".interest__check")];

            checkBox.forEach((i) => {
                if (el.checked) {
                    i.checked = true;
                } else {
                    i.checked = false;
                };
            });
        }
    });
})












