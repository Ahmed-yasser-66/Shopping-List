const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemFilter = document.querySelector('#filter');
const itemsList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');

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

  checkUI();

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
    if (confirm('Are you sure you want to remove item')) {
      e.target.parentElement.parentElement.remove();

      checkUI();
    }
  }
}

function clearItems() {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
  checkUI();
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = document.querySelectorAll('li').value.toLowerCase();

  if (text !== items) {
    items.style.display = 'none';
  }
}

function checkUI() {
  const items = document.querySelectorAll('li');

  if (items.length === 0) {
    itemFilter.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    itemFilter.style.display = 'block';
    clearBtn.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();
