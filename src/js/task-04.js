const dencrementBtn = document.querySelector('button[data-action="C"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterTable = document.querySelector("#value");
let counterValue = 0;

dencrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterTable.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterTable.textContent = counterValue;
});
