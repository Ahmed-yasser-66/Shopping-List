const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  const itemValue = e.target.value;
  console.log(itemValue);
}

itemForm.addEventListener('submit', addItem);
