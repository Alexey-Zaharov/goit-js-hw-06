const sizeController = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

sizeController.addEventListener("input", (event) => {
  return (textToChange.style.fontSize = `${event.currentTarget.value}px`);
});
