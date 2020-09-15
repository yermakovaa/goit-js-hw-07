const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const createListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
  });
}

const listIngredients = createListIngredients(ingredients);
ingredientsContainerEl.append(...listIngredients);
