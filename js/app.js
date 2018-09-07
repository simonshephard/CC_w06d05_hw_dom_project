document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleForm);
  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDelete);
});

const handleForm = function(event) {
  event.preventDefault();
  const type = event.target.type.value;
  const name = event.target.name.value;
  const description = event.target.description.value;
  const range = event.target.range.value;
  const file = event.target.file.value;
  const radio = event.target.radio.value;
  addDoubleList(name, type, description, range, file, radio);
  this.reset();
};

const handleDelete = function() {
  const listContainer = document.querySelector('#list');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
};

const addElement = function(elementType, classToAdd, textContent, addTo) {
  const newElement = document.createElement(elementType);
  newElement.classList.add(classToAdd);
  newElement.textContent = textContent;
  addTo.appendChild(newElement);
  return newElement;
};

const addDoubleList = function(name, type, description, range, file, radio) {
  const list = document.querySelector('#list');
  const newDiv1 = addElement('ul', 'list-item', "", list);
  addElement('li', "list-item-name", `Name: ${name}`, newDiv1);
  addElement('li', "list-item-type", `Type: ${type}`, newDiv1);
  addElement('li', "list-item-description", `Description: ${description}`, newDiv1);
  const newDiv2 = addElement('ul', 'list-item', "", list);
  addElement('li', "list-item-range", `Range: ${range}`, newDiv2);
  addElement('li', "list-item-file", `File: ${file}`, newDiv2);
  addElement('li', "list-item-radio", `Radio: ${radio}`, newDiv2);
};
