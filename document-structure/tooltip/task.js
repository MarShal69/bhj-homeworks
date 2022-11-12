const hasTooltip = [...document.querySelectorAll(".has-tooltip")];
const toolTip = document.createElement("div");
toolTip.classList.add("tooltip");

hasTooltip.forEach(el => {
    el.onclick = function () {
        el.appendChild(toolTip);

        const closest = toolTip.closest(".has-tooltip");
        const child = closest.querySelector(".tooltip");

        toolTip.textContent = el.getAttribute("title");

        if (el.classList.contains("tooltip_active")) {
            toolTip.classList.remove("tooltip_active");
        } else {
            toolTip.classList.add("tooltip_active");
        };

        el.style.position = "relative";
        toolTip.style.position = "absolute";
        let left = closest.getBoundingClientRect().left;
        child.style.marginLeft = left + "px";
        return false;
    };
});






