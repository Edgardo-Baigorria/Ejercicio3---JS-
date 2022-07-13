const idPizza = document.getElementById("idPizza");
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const imgPizza = document.getElementById("imgPizza");
const buscar = document.getElementById("buscar");

const pizza = [
    { id: 1, nombre: "MUZZARELLA", ingredientes: ["salsa", "muzzarela", "oregano"], precio: 400 },
    { id: 2, nombre: "NAPOLITANA", ingredientes: ["salsa", "muzzarela", "tomate", "ajo"], precio: 800 },
    { id: 3, nombre: "MORRON", ingredientes: ["salsa", "muzzarela", "jamon", "morron"], precio: 500 },
    { id: 4, nombre: "FUGAZZETA", ingredientes: ["muzzarela", "cebolla", "aceite de oliva"], precio: 600 },
    { id: 5, nombre: "CALABRESA", ingredientes: ["salsa", "muzzarela", "longaniza"], precio: 650 },
    { id: 6, nombre: "ANANA", ingredientes: ["salsa", "muzzarela", "ananá"], precio: 700, },
]

buscar.addEventListener("click", buscarPizza);

function buscarPizza() {
    const inputParse = parseInt(idPizza.value);
    idPizza.value = "";

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].id === inputParse) {
            nombrePizza.innerHTML = pizza[i].nombre;
            precioPizza.innerHTML = "$" + pizza[i].precio;
            return;
        } else {
            nombrePizza.innerHTML = "No hay pizza con este ID";
            precioPizza.innerHTML = "";
        }
    }
}