const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();

  const itemValue = itemInput.value;
  //   console.log(itemValue);

  const li = document.createElement('li');
}

itemForm.addEventListener('submit', addItem);
