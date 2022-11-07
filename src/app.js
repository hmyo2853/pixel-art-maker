const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const strokeWidth = document.getElementById("line-width");
const strokeColor = document.getElementById("options_color");
const clearBtn = document.getElementById("lineAndBtn_clear-btn");
const saveBtn = document.getElementById("lineAndBtn_save-btn");

const lineText = document.getElementById("lineAndBtn_line-text");

/////////////// color ///////////////
const colorArr = [
  "#eee8aa",
  "#ffc0cb",
  "#FF69B4",
  "#BEBFD7",
  "#5A4FCF",
  "#0060B7",
  "#31CEFF",
  "#00BCAF",
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
  if (x.length != 3) {
    lineText.innerHTML = `굵기 ${x}.0`;
  } else {
    lineText.innerHTML = `굵기 ${x}`;
  }
}

function onClear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onSave() {
  if (confirm("작업한 이미지를 다운로드 하시겠습니까?")) {
    const imgUrl = canvas.toDataURL();
    const tagA = document.createElement("a");
    tagA.href = imgUrl;
    tagA.download = "pixel-canvas.jpg";
    tagA.click();
  }
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

clearBtn.addEventListener("click", onClear);
saveBtn.addEventListener("click", onSave);

optionEl.forEach((color) => color.addEventListener("click", setOptionColor));
