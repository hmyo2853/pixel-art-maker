const container = document.querySelector(".container");
const sizeEl = document.querySelector(".size");
const size = sizeEl.value;
console.log(size);

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

function divideContainer(s) {
  container.style.setProperty("--size", s);
  for (let i = 0; i < s * s; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    container.appendChild(div);
  }
}

divideContainer(size);
