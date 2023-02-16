const numberOfCotegoris = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCotegoris.length}`);

numberOfCotegoris.forEach(function (number) {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(`Elements: ${number.lastElementChild.children.length}`);
});
