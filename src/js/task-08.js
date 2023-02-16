const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const savedData = { email, password };

  if (email === "" || password === "") {
    return alert("All filds sould to be filed!");
  }

  console.log(savedData);
  event.currentTarget.reset();
});
