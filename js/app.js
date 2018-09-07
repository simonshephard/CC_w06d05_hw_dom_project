document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', handleForm);
  const button = document.querySelector('#delete');
  button.addEventListener('click', handleDelete);
})

const handleForm = function(event) {

  event.preventDefault();

  const type = event.target.type.value;
  const name = event.target.name.value;
  const description = event.target.description.value;
  const range = event.target.range.value;
  const file = event.target.file.value;
  const radio = event.target.radio.value;

  const list = document.querySelector('#list');

  const newDiv1 = addElement('div', 'list-item', "", list);
  addElement('p', "list-item-name", `Name: ${name}`, newDiv1);
  addElement('p', "list-item-type", `Type: ${type}`, newDiv1);
  addElement('p', "list-item-description", `Description: ${description}`, newDiv1);

  const newDiv2 = addElement('div', 'list-item', "", list);
  addElement('p', "list-item-range", `Range: ${range}`, newDiv2);
  addElement('p', "list-item-file", `File: ${file}`, newDiv2);
  addElement('p', "list-item-radio", `Radio: ${radio}`, newDiv2);


  // const newName = document.createElement('h2');
  // newName.textContent = `Name: ${name}`;
  // newDiv.appendChild(newName);
  //
  // const newType = document.createElement('p');
  // newType.textContent = `Type: ${type}`;
  // newDiv.appendChild(newType);
  //
  // const newDescription = document.createElement('p');
  // newDescription.textContent = `Description: ${description}`;
  // newDiv.appendChild(newDescription);
  //
  //
  // newItem1.textContent = `Type: ${type}`;
  // const newItem1 = document.createElement('h2');
  // newItem1.textContent = `Type: ${type}`;
  // const newItem1 = document.createElement('h2');
  // newItem1.textContent = `Type: ${type}`;
  //
  // ` \r\nName: ${name} \r\nDescription: ${description}`;
  // newItem1.classList.add('list-item')
  //
  // const newItem1 = document.createElement('p');
  // newItem1.textContent = `Type: ${type} \r\nName: ${name} \r\nDescription: ${description}`;
  // newItem1.classList.add('list-item')

  // const newItem2 = document.createElement('p');
  // newItem2.textContent = `Range: ${range} \r\nFile: ${file} \r\nRadio: ${radio}`;
  // newItem2.classList.add('list-item')

  // const list = document.querySelector('#list');
  // list.appendChild(newItem1);
  // list.appendChild(newItem2);

  this.reset();
};

const handleDelete = function() {
  const listContainer = document.querySelector('#list');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
};

const addElement = function(elementType, classToAdd, textContent, addTo) {
  console.log('in addElement');
  const newElement = document.createElement(elementType);
  console.log('created element');
  newElement.classList.add(classToAdd);
  console.log('added class');
  newElement.textContent = textContent;
  console.log('added text');
  addTo.appendChild(newElement);
  console.log('appended - about to return');
  return newElement;
}
