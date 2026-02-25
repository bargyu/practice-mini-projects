const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

function updateColor() {
    const red = r.value;
    const green = g.value;
    const blue = b.value;

    // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `hsl(${red}, ${green}%, ${blue}%)`;
}

r.addEventListener("input", updateColor);
g.addEventListener("input", updateColor);
b.addEventListener("input", updateColor);
