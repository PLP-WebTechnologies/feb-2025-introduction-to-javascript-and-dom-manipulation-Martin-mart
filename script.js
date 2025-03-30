// DOM Elements
const changeTextBtn = document.getElementById('changeTextBtn');
const message = document.getElementById('message');
const changeColorBtn = document.getElementById('changeColorBtn');
const addElementBtn = document.getElementById('addElementBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const elementContainer = document.getElementById('elementContainer');

// Function to change text content dynamically
changeTextBtn.addEventListener('click', () => {
  message.textContent = "You've changed the text! Well done!";
});

// Function to modify CSS styles dynamically
changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightblue';
});

// Function to add a new element dynamically
addElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new element added dynamically!';
  elementContainer.appendChild(newElement);
});

// Function to remove the last added element
removeElementBtn.addEventListener('click', () => {
  const lastElement = elementContainer.lastElementChild;
  if (lastElement) {
    elementContainer.removeChild(lastElement);
  }
});
