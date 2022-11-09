const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size");
const size = sizeEl.value;
const color = document.querySelector(".colorPicker");
const resetBtn = document.querySelector(".resetBtn");

let isDrawing = false;

container.addEventListener("mousedown", () => {
  isDrawing = true;
});

container.addEventListener("mouseup", () => {
  isDrawing = false;
});

// container를 넘어가면 drawing 취소하기
window.addEventListener("mousemove", (e) => {
  if (e.target.className == "pixel" || e.target.className == "container") {
    return;
  } else {
    isDrawing = false;
  }
});
// div pixel 만들기
function divideContainer(s) {
  container.style.setProperty("--size", s);
  for (let i = 0; i < s * s; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
      if (isDrawing) {
        div.style.backgroundColor = color.value;
      }
    });
    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = color.value;
    });
  }
}

divideContainer(size);
