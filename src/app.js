const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const strokeWidth = document.getElementById("line-width");
const strokeColor = document.getElementById("color");
const clearBtn = document.getElementById("options_clear-btn");

const lineText = document.getElementById("line-width_text");

/////////////// color ///////////////
const colorArr = [
  "#ff6347",
  "#ffc0cb",
  "#eee8aa",
  "#9370db",
  "#008080",
  "#222222",
];
/////////////////////////////////////////

canvas.width = 400;
canvas.height = 400;

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

ctx.lineWidth = strokeWidth.value;

let isDrawing = false; // default false

function onMove(event) {
  if (isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function nowDrawing() {
  isDrawing = true;
}

function endDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

function setLineWidth(event) {
  ctx.lineWidth = event.target.value;
  setLineWidthText(event.target.value);
}

function setLineColor(event) {
  ctx.strokeStyle = event.target.value;
}

// line width text change
function setLineWidthText(x) {
  lineText.innerHTML = `line ${x}`;
}

function setClear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

//////////// colors map ////////////////

const colorOptions = document.getElementById("options_color-options");

colorOptions.innerHTML = colorArr
  .map((items) => {
    return (
      "<div class='option' style='background:" +
      items +
      "' id='" +
      items +
      "'></div>"
    );
  })
  .join("");

const optionEl = Array.from(document.getElementsByClassName("option"));

///////////////////////////////////////

function setOptionColor(event) {
  ctx.strokeStyle = event.target.id;
  strokeColor.value = event.target.id;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", nowDrawing);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mouseleave", endDrawing);

strokeWidth.addEventListener("change", setLineWidth);
strokeColor.addEventListener("change", setLineColor);

clearBtn.addEventListener("click", setClear);

optionEl.forEach((color) => color.addEventListener("click", setOptionColor));
