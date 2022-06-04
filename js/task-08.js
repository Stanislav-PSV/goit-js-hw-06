const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);
const userData = {
  email: "",
  password: "",
};
function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const pass = event.currentTarget.elements.password.value;
  if (email === "" || pass === "") {
    alert("please be a human");
  } else {
    userData.email = email;
    userData.password = pass;
    console.log(userData);
    formEl.reset();
  }
};
