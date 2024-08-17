const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "red";
function setcolour(name) {
  body.style.backgroundColor = name;
}
function randomcolour() {
  const red = Math.round(Math.random() * 225);
  const green = Math.round(Math.random() * 225);
  const blue = Math.round(Math.random() * 225);
  const colour = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = colour;
}
randomcolour();
