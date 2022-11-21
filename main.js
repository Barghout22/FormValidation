const mail = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipCode");
const pwd = document.getElementById("pwd");
const pwdRe = document.getElementById("pwdRe");
const form = document.querySelector("form");

mail.addEventListener("blur", () => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity(
      "I am expecting an e-mail address i.e something@something"
    );
    mail.reportValidity();
  } else {
    mail.setCustomValidity("");
  }
});
country.addEventListener("blur", () => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity("letters only please");
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
});
zipcode.addEventListener("blur", () => {
  if (zipcode.validity.rangeOverflow) {
    zipcode.setCustomValidity("the zipcode should be less than or equal 99999");
    zipcode.reportValidity();
  } else if (zipcode.validity.rangeUnderflow) {
    zipcode.setCustomValidity("the zipcode should be 10000");
    zipcode.reportValidity();
  } else {
    zipcode.setCustomValidity("");
  }
});
pwd.addEventListener("blur", () => {
  if (pwd.validity.tooLong) {
    pwd.setCustomValidity(
      "the password is too long;it should be less than 20 characters"
    );
    pwd.reportValidity();
  } else if (pwd.validity.tooShort) {
    pwd.setCustomValidity(
      "the password is too short;it should be more than 8 characters"
    );
    pwd.reportValidity();
  } else {
    pwd.setCustomValidity("");
  }
});
pwdRe.addEventListener("blur", () => {
  if (pwdRe.value !== pwd.value) {
    pwdRe.setCustomValidity(
      "the password reconfirmation needs to match the first password"
    );
    pwdRe.reportValidity();
  } else {
    pwdRe.setCustomValidity("");
  }
});

form.addEventListener("submit", (event) => {
  if (
    mail.reportValidity() &&
    country.reportValidity() &&
    zipcode.reportValidity() &&
    pwd.reportValidity() &&
    pwdRe.reportValidity()
  ) {
    console.log("form submitted successfully with no errors!");
  } else {
    event.preventDefault();
  }
});
