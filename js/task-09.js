function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector("body");
const BtnEl = document.querySelector(".change-color");
const hexText = document.querySelector(".color");
BtnEl.addEventListener("click", onhexColor);
function onhexColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  hexText.textContent = hexColor;
  console.log(hexColor);
};
