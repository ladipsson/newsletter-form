const signUp = document.querySelector(".card-1");
const success = document.querySelector(".success");
const submit = document.querySelector(".submit-btn");
const dismiss = document.querySelector(".dismiss");
const email = document.getElementById("email");
const errorMessage = document.querySelector(".error");
const inputBox = document.querySelector('input');
const placeholderText = inputBox.placeholder;

submit.addEventListener("click", () => {
    const emailValue = email.value;
  if (!emailValue) {
    errorMessage.textContent = "Valid email required";
    inputBox.style.border = "2px solid hsl(4, 100%, 67%)";
    inputBox.style.backgroundColor = "rgba(255, 78, 0, 0.2)";
  } else {
    success.classList.remove("hidden");
    signUp.style.display = "none";
    errorMessage.textContent = "";
  }
});

dismiss.addEventListener("click", () => {
  success.classList.add("hidden");
  signUp.style.display = "flex";
});
