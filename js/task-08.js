const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.elements);
  const {elements:{ email, password }} = event.currentTarget;
    console.log(elements);
  if (email.value === "" || password.value === "") {
    alert();
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
