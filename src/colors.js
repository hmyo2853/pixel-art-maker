const colors = ["tomato", "yellow", "purple", "teal"];

const colorOptions = document.getElementById("color-options");

colorOptions.innerHTML = colors
  .map((items) => {
    return "<div class='colors' id='" + items + "'></div>";
  })
  .join("");
