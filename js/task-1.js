console.log(
  `В списке ${document.querySelector('#categories').children.length} категории`,
);

document.querySelectorAll('.item').forEach(item =>
  console.log(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length} `),
);
