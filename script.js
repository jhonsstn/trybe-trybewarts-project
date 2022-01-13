const loginButton = document.getElementById('login-button');

const loginEmail = document.getElementById('user-email');

const loginPassword = document.getElementById('user-password');

const textArea = document.getElementById('textarea');

const showCounter = document.getElementById('counter');

const checkBox = document.getElementById('agreement');

const submitButton = document.getElementById('submit-btn');

const form = document.getElementById('evaluation-form');

const firstName = document.getElementById('input-name');

const lastName = document.getElementById('input-lastname');

const email = document.getElementById('input-email');

const house = document.getElementById('house');

const family = document.getElementsByName('family');

const subjects = document.querySelectorAll('#input-check');

loginButton.addEventListener('click', () => {
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

textArea.addEventListener('keyup', () => {
  const textChars = textArea.value;

  const textCharsLength = textChars.length;

  const charsRemain = 500 - textCharsLength;

  showCounter.innerHTML = charsRemain;
});

submitButton.disabled = true;

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function createFormElement(name, value) {
  const formElement = document.createElement('p');
  const textElement = document.createTextNode(`${name}: ${value}`);
  formElement.appendChild(textElement);
  return formElement;
}

let fullName = '';
let selectedHouse = '';
let selectedFamily = '';
let subjectsString = '';

submitButton.addEventListener('click', () => {
  fullName = `${firstName.value} ${lastName.value}`;
  selectedHouse = house.options[house.selectedIndex].value;

  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      selectedFamily = family[i].value;
    }
  }

  let selectedSubjects = [];

  subjects.forEach((item) => {
    if (item.checked) {
      selectedSubjects.push(item.value);
    }
  });

  subjectsString = selectedSubjects[0];

  for (let i = 0; i < selectedSubjects.length - 1; i += 1) {
    subjectsString += `, ${selectedSubjects[i + 1]}`;
  }

  form.innerHTML = '';
  appendFormItens();
});

subjects.forEach((item) => {
  if (item.checked) {
    console.log(item.value);
  }
});

function appendFormItens() {
  form.appendChild(createFormElement('Nome', fullName));
  form.appendChild(createFormElement('Email', email.value));
  form.appendChild(createFormElement('Casa', selectedHouse));
  form.appendChild(createFormElement('Família', selectedFamily));
  form.appendChild(createFormElement('Matérias', subjectsString));
}
