const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liAdd = ingredients.map(ingredient => {
  const link = document.createElement("li");
  link.textContent = ingredient;
  link.classList.add("item");
  return link;
});
list.append(...liAdd);
// console.log(liAdd);