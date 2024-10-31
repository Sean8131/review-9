const randomColors = [
  "#FFB17A",
  "#0A1128",
  "#BEE7B8",
  "#713E5A",
  "#0B4F6C",
  "#20BF55",
];

// Get color indicator element from the DOM

const colorPreviewElement = document.getElementById("color-indicator");

// Enable color to be changed from the app

const colorChoiceElement = document.getElementById("color-selector");

let chosenColor = colorChoiceElement.innerText;

// Change color of indicator

function changeColor() {
  colorPreviewElement.style.backgroundColor = chosenColor;
}

changeColor();
