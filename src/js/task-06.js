const inputArea = document.querySelector("#validation-input");

inputArea.addEventListener("blur", () => {
  if (
    inputArea.value.length.toString() !== inputArea.getAttribute("data-length")
  ) {
    inputArea.classList.remove("valid");
    return inputArea.classList.add("invalid");
  }
  inputArea.classList.remove("invalid");
  return inputArea.classList.add("valid");
});

// inputArea.addEventListener("blur", () => {
//   inputArea.value.length.toString() !== inputArea.getAttribute("data-length")
//     ? inputArea.classList.add("invalid")
//     : inputArea.classList.replace("invalid", "valid");
// });

// inputArea.addEventListener("blur", () => {
//   if (
//     inputArea.value.length.toString() !== inputArea.getAttribute("data-length")
//   ) {
//     return inputArea.classList.add("invalid");
//   }
//   return inputArea.classList.replace("invalid", "valid");
// });
