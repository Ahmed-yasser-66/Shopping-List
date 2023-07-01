const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const filter = document.querySelector('#filter');
const itemsList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const items = document.querySelectorAll('li');

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

  li.appendChild(button);

  itemsList.appendChild(li);

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
}

function checkUI () {
  if(items.length === 0)
}
// Event Listeners
itemForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
