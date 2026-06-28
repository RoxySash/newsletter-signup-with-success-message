const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const dialogElem = document.getElementById("modal_container");
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", closeModalFn)


function openModalFn() {
  dialogElem.style.display = "block";
}
function closeModalFn (){
  dialogElem.style.display = "none";
}


function validateEmail(field) {
  const errorEl = field.parentElement.querySelector(".error-message");

  if (!field.validity.valid) {
    errorEl.textContent = "Valid email required";
    return false;
  }
  errorEl.textContent = "";
  return true;
}

form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", () => {
    validateEmail(input);
  });
});



form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll("input");

  fields.forEach((field) => {
    const fieldValid = validateEmail(field);

    if (!fieldValid) {
      isValid = false;
    };
  });

  if (isValid) {
    // send form data
    openModalFn();
    form.reset();
  } else {
    form.querySelector("input:invalid").focus();
  };

});
