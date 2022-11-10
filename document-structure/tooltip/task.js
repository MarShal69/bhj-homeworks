const hasTooltip = [...document.querySelectorAll(".has-tooltip")];
console.log(hasTooltip);

const toolTip = document.createElement("div");
toolTip.classList.add("tooltip");

hasTooltip.forEach(el => {
    el.onclick = function () {
        toolTip.textContent = el.getAttribute("title");
        // el.insertBefore(toolTip, null)
        // el.insertAdjacentElement("beforeend", toolTip);
        el.appendChild(toolTip);
        el.setAttribute("position", "relative");
        toolTip.setAttribute("position", "absolute");
        toolTip.classList.toggle("tooltip_active");
        return false;
    };
});