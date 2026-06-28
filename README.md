# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile version](./assets/images/Screenshot%20Mobile%20Version.png)
![Mobile Success Message](./assets/images/Screenshot%20Mobile%20Success%20Message.png)
![Failed Validation](./assets/images/Screenshot%20Failed%20Validation.png)
![Desktop Version](./assets/images/Screenshot%20Desktop%20Version.png)
![Desktop Success Message](./assets/images/Screenshot%20Desktop%20Success%20Message.png)
![Hover States](./assets/images/Screenshot%20But%20Click%20hover%20state%20and%20Error.png)

### Links

- Solution URL: [solution URL here](https://github.com/RoxySash/newsletter-signup-with-success-message.git)
- Live Site URL: [live site URL here](https://roxysash.github.io/newsletter-signup-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS



### What I learned

I learned alot about modals and validation. Working with the modal submission was fun and I accepted the challenge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.modal-container {
  top: 0;
  left: 0;
  position: fixed;

  background-color: var(--neutral-blue700);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```
```js
function openModalFn() {
  dialogElem.style.display = "flex";
}
function closeModalFn (){
  dialogElem.style.display = "none";
}
```

### Continued development

Faster completion for challenges. I will do more JS challenges.

### Useful resources

- [How to set custom error messages for your HTML forms by Kevin Powell
](https://youtu.be/h5qqmE83Tes?si=Tu50Ya75J6OMWIKW) - This helped me for form validation. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [@RoxySash](https://www.frontendmentor.io/profile/RoxySash)



## Acknowledgments

I would love to thank Kevin powell's video on vaildation. 


