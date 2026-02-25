const text = document.getElementById("text");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
    // Itt kell eldönteni, hogy a szöveg látszik-e
    if ( text.style.display === "none" ) {
        text.style.display = "";
    } else {
        text.style.display = "none";
    }
        // és ennek megfelelően elrejteni vagy megmutatni

});
