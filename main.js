const mail = document.getElementById("mail");

mail.addEventListener("blur", () => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity("I am expecting an e-mail address!");
    mail.reportValidity();
  } else {
    mail.setCustomValidity("");
  }
});
