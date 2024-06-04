const container = document.querySelector("#container");
const emailInput = document.querySelector("input");
const subBtn = document.querySelector("#subscribeBtn");
const invalidInfo = document.querySelector(".invalidInfo");
const successScreen = document.querySelector("#thankDiv");
const dismissBtn = document.querySelector("#dismiss");

const emailValidation = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value)) {
    emailInput.classList.add("invalidInput");
    invalidInfo.classList.remove("hidden");
  } else {
    emailInput.classList.remove("invalidInput");
    invalidInfo.classList.add("hidden");
    container.style.display = "none";
    successScreen.classList.remove("hidden");
    input.value = "";
  }
};

const backToContainer = () => {
  container.style.display = "flex";
  successScreen.classList.add("hidden");
};

subBtn.addEventListener("click", () => {
  emailValidation(emailInput);
});

dismissBtn.addEventListener("click", backToContainer);
