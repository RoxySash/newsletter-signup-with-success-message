const email = document.getElementById('email');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');

function handleSubmit(e) {
    e.preventDefault()
}

form.addEventListener('submit', handleSubmit);

submitBtn.addEventListener("click", function(){
    alert('Button Clicked');
});


