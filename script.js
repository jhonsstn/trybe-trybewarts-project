const loginButton = document.getElementById('login-button');

const loginEmail = document.getElementById('user-email');

const loginPassword = document.getElementById('user-password');

const textArea = document.getElementById('textarea');

const showCounter = document.getElementById('counter');

const checkBox = document.getElementById('agreement');

const submitButton = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456'
  ) {
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
