const email = document.getElementById('email');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('modal');

function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
}

form.addEventListener('submit', handleSubmit);

submitBtn.addEventListener("click", function(){
  //  alert('Button Clicked');
    modal.showModal();
    // add the function for the error or change modal 
});


