// 1. Arreglo con 6 colores en formato RGB (respetando los espacios)
let colors = [
  "rgb(240, 14, 128)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)"
];

// 2. Seleccionar todos los cuadrados (asegúrate de que la clase coincida con tu HTML, usualmente es ".square")
let squares = document.querySelectorAll(".square");

// 3. Recorrer los cuadrados y asignarles un color del arreglo
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
