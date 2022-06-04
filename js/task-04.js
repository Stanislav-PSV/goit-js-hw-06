const incrBtn = document.querySelector("[data-action='increment']");
const decrBtn = document.querySelector("[data-action='decrement']");
const valueNum = document.querySelector("#value");
let counterValue = 0;
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  valueNum.textContent = counterValue;
});
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueNum.textContent = counterValue;
});