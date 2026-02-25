const box = document.getElementById("box");
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {
    // Itt kell beállítani egy új háttérszínt
    const r = Math.random() * 255 ;
    const g = Math.random() * 255 ;
    const b = Math.random() * 255 ;
    
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});

