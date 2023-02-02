const ingredients =
 [
  "potatoes",
  "mushrooms",
  "garlic",
  "tomatos",
  "herbs",
  "condiments",
];

// Створення списку елементів
const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

// Додавання елементів до списку
const list = document.querySelector('#ingredients');
list.append(...listItems);