/*template_of1z902
service_evvisea

*/
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {   // toggles the contrast of the page
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) { // sends the form data to the email service
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      "service_evvisea",
      "template_of1z902",
      event.target,
      "dqahaeMmkLpA4hQyj"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible")
      success.classList += " modal__overlay--visible"
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is temporarily unavailable. Please contact me directly on danwelsh3@gmail.com"
      )
    })
}
 function toggleModal() { // open and close the modal
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open"); // close the modal
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}