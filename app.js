// const loginForm = document.querySelector(".login-form");
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);
