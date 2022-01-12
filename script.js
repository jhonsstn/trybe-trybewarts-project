const loginButton = document.getElementById("login-button");

const loginEmail = document.getElementById("user-email");

const loginPassword = document.getElementById("user-password");

const textArea = document.getElementById("textarea");

const showCounter = document.getElementById("counter");

loginButton.addEventListener("click", () => {
  if (
    loginEmail.value === 'tryber@teste.com' &&
    loginPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

textArea.addEventListener("keyup", () => {
  let textChars = textArea.value;

  let textCharsLength = textChars.length;

  let charsRemain = 500 - textCharsLength;

  showCounter.innerHTML = charsRemain;
});
