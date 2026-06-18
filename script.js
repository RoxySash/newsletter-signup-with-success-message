const email = document.getElementById('email');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const dialogElem = document.getElementById('modal_container');
const closeBtn = document.getElementById('close');



function validateEmail(field) {
  const errorEl = field.parentElement.querySelector('.error-message');
   if(!field.validity.valid) {
    errorEl.textContent = "Valid email required";
    return false
   }
 errorEl.textContent = "";
return true;
}

form.querySelectorAll('input').forEach(input => {
  input.addEventListener('blur', () => {
    validateEmail(input)})
})

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

})

async function sendData() {

  const formData = new FormData(form);

  try {
    const response = await fetch("", {
      method: "POST",
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}


submitBtn.addEventListener('click', () => {
 

  if(isValid) {
    form.reset();
  } else {
    
    form.querySelector('invalid').focus();
  }

  dialogElem.showModal();
  
})

closeBtn.addEventListener('click', () => {
  dialogElem.close();
})