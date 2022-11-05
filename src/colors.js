const colorArr = ["tomato", "pink", "yellow", "purple", "teal", "black"];

const colorOptions = document.getElementById("color-options");

colorOptions.innerHTML = colorArr
  .map((items) => {
    return (
      "<div class='colors' id='" +
      items +
      "' style='background:" +
      items +
      "'></div>"
    );
  })
  .join("");

const colors = document.getElementsByClassName("colors");
console.log(colors);
