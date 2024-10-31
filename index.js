const randomColors = [
  "#FFB17A",
  "#0A1128",
  "#BEE7B8",
  "#713E5A",
  "#0B4F6C",
  "#20BF55",
];

const array = ["a", "b", "c"];
const randomIndex = Math.floor(Math.random() * array.length - 1);
console.log(array[randomIndex]); // Will print either 'a', 'b', or 'c'

// Get color indicator element from the DOM

const colorPreviewElement = document.getElementById("color-indicator");

// Enable color to be changed from the app

const colorChoiceElement = document.getElementById("color-selector");

const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", changeColor);

// let chosenColor = colorChoiceElement.innerText;

// Change color of indicator

function changeColor() {
  colorPreviewElement.style.backgroundColor = array[randomIndex];
}

randomColors.forEach(changeColor);
