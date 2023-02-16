const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const onAddIngridients = document.querySelector("#ingredients");
const listToAddEl = [];

ingredients.forEach((ingridient) => {
  const ingredientsToAdd = document.createElement("li");
  ingredientsToAdd.classList.add("item");
  ingredientsToAdd.textContent = ingridient.valueOf(ingredients);
  listToAddEl.push(ingredientsToAdd);
});
onAddIngridients.append(...listToAddEl);
