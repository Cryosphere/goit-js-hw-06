const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
  const {elements:{ email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені!!");
    }
  const result = { email:email.value, password:password.value };

  console.log(result);
  event.currentTarget.reset();
}
