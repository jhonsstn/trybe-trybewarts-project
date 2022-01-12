let loginButton = document.getElementById("login-button");

let loginEmail = document.getElementById("user-email");

let loginPassword = document.getElementById("user-password");

let textArea = document.getElementById("textarea");

let showCounter = document.getElementById("counter");

loginButton.addEventListener("click", () => {
  if (
    loginEmail.value == "tryber@teste.com" &&
    loginPassword.value == "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

textArea.addEventListener("keyup", () => {
  textChars = textArea.value;

  textCharsLength = textChars.length;

  charsRemain = 500 - textCharsLength;

  showCounter.innerHTML = charsRemain;
});
