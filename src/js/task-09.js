function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elementToChenge = document.querySelector("body");
const colorChngBtn = document.querySelector(".change-color");
const colorToShow = document.querySelector(".color");

colorChngBtn.addEventListener("click", () => {
  const colorValue = getRandomHexColor();
  elementToChenge.style.backgroundColor = colorValue;
  colorToShow.textContent = colorValue;
});

// colorChngBtn.addEventListener("click", () => {
//   elementToChenge.style.backgroundColor = getRandomHexColor();
//   colorToShow.textContent = getRandomHexColor();
// });
