const email = document.getElementById('email');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('modal');

function validateEmail(field) {
  const errorEl = field.parentElement.querySelector('.error-message');
   if(!field.validity.valid) {
    errorEl.textContent = "Valid email required";
    return false
   }

return true;
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll('input');

  fields.forEach(field => {
  
    const fieldValid = validateEmail(field);
    if(!fieldValid) {
      isValid = false;
    }
  })

  if(isValid) {
    console.log("submitting")
  } else {
    console.log("error")
  }

})

