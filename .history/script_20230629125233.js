const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();

  const itemValue = itemInput.value;

  if (itemValue === '') {
    itemInput.style.border = '2px solid red';
    itemInput.insertAdjacentText('afterend', 'Please Enter an Item');
  }

  const li = document.createElement('li');
  li.textContent = itemValue;

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  itemList.appendChild(li);
}

itemForm.addEventListener('submit', addItem);
