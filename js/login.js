const loginform = document.querySelector("#login-form");

const goodDayUser = loginform.querySelector("h1");
const userNameInput = loginform.querySelector("input");

const HIDDEN_CLASS = "hidden";
const LOCAL_STORAGE_USER_NAME = "userName";

function onSubmitLogin(event) {
  localStorage.setItem(LOCAL_STORAGE_USER_NAME, userNameInput.value);
}

const user = localStorage.getItem(LOCAL_STORAGE_USER_NAME);
if (user === null) {
  userNameInput.classList.remove(HIDDEN_CLASS);
  loginform.addEventListener("submit", onSubmitLogin);
} else {
  userNameInput.classList.add(HIDDEN_CLASS);
  goodDayUser.innerText = `Good Day ${user}`;
}
