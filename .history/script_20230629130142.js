const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

function addItem(e) {
  e.preventDefault();

  const itemValue = itemInput.value;

  if (itemValue === '') {
    itemInput.style.border = '2px solid red';
    return;
  } else {
    itemInput.style.border = '1px solid #ccc';
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(itemValue));

  const button = createButton('remove-item btn-link text-red');

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
}

itemForm.addEventListener('submit', addItem);
