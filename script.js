let boton = document.querySelector(".boton");
let caja = document.querySelector(".rojo");


const colores = ["lightblue", "lightcoral", "lightgreen", "gold", "violet"];
let indiceColor = 0;

boton.addEventListener("click", function() {
    indiceColor = (indiceColor + 1) % colores.length;
    caja.style.backgroundColor = colores[indiceColor];
});
