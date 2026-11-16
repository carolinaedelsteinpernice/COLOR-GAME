let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

// Selección de elementos del DOM
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");

// Mostrar el código RGB ganador en el título
colorDisplay.textContent = pickedColor;

// Configurar los cuadrados y la lógica del juego
for (let i = 0; i < squares.length; i++) {
  // Asignar colores iniciales
  squares[i].style.backgroundColor = colors[i];

  // Agregar evento click a cada cuadrado
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "¡Correcto!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      // Cambia al mismo color de fondo que el body (asegúrate de que coincida con tu CSS)
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Intentalo Nuevamente";
    }
  });
}

// Botón Reset / Nuevos Colores / Play Again?
resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue"; // O el color original de tu h1 en CSS

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

// Botón Easy (3 cuadrados)
easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "Nuevos Colores";
  h1.style.backgroundColor = "steelblue";

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// Botón Hard (6 cuadrados)
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "Nuevos Colores";
  h1.style.backgroundColor = "steelblue";

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

// --- FUNCIONES AUXILIARES ---

// Cambia todos los cuadrados al color ganador
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Elige un color aleatorio del arreglo colors
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Genera un arreglo con 'num' cantidad de colores aleatorios
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// Genera un string RGB aleatorio con el formato exacto "rgb(r, g, b)"
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
