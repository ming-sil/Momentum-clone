// const loginForm = document.querySelector(".login-form");
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const onLoginSubmit = (event) => {
  // const username = loginInput.value;
  //   if (username === "") {
  //     alert("Please write your name.");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long.");
  //   }

  event.preventDefault();
  console.log(loginInput.value);
};

loginForm.addEventListener("submit", onLoginSubmit);
