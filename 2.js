const value = document.getElementById("value");
const btn = document.getElementById("doubleBtn");

btn.addEventListener("click", () => {
    // 1. Olvasd ki a value.textContent értékét
    let szam = Number(value.textContent);
    // 2. Alakítsd számmá
    // 3. Szorozd meg kettővel
    szam = szam * 2
    // 4. Írd vissza a value.textContent-be
    value.textContent = szam;

});
