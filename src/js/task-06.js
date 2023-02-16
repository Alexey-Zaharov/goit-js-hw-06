const inputArea = document.querySelector("#validation-input");

inputArea.addEventListener("blur", () => {
  if (
    inputArea.value.length.toString() !== inputArea.getAttribute("data-length")
  ) {
    return inputArea.classList.add("invalid");
  }
  return inputArea.classList.replace("invalid", "valid");
});
