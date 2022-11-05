const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const strokeWidth = document.getElementById("line-width");
const strokeColor = document.getElementById("color");

canvas.width = 400;
canvas.height = 400;

ctx.strokeWidth = strokeWidth.value;

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
  console.log(event.target.value);
  ctx.strokeWidth = event.target.value;
}

function setLineColor(event) {
  ctx.strokeStyle = event.target.value;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", nowDrawing);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mouseleave", endDrawing);

strokeWidth.addEventListener("change", setLineWidth);
strokeColor.addEventListener("change", setLineColor);
