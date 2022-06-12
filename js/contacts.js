const form = document.querySelector("#contactForm");
const nameForm = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subjectForm = document.querySelector("#subject");
const subjectFormError = document.querySelector("#subjectError");
const emailForm = document.querySelector("#email");
const emailFormError = document.querySelector("#emailError");

function validationForm(validate) {
  validate.preventDefault();

  if (checkLength(nameForm.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(subjectForm.value, 10) === true) {
    subjectFormError.style.display = "none";
  } else {
    subjectFormError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validationForm);
