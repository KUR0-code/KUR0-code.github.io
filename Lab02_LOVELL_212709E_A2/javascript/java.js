
// pop up js
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
var overlay;

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

if (overlay = document.querySelector('.overlay')) {
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => { closeModal(modal) });
  });
}

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


var overlay2;
const openModal2Buttons = document.querySelectorAll('[data-modal2-target]')
const closeModal2Buttons = document.querySelectorAll('[data-close-button]')

openModal2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modal2Target)
    openModal2(modal2)
  })
})

if (overlay2 = document.querySelector('.overlay2')) {
  overlay2.addEventListener('click', () => {
    const modal2s = document.querySelectorAll('.modal2.active');
    modal2s.forEach(modal2 => { closeModal(modal2) });
  });
}

closeModal2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal2(modal2)
  })
})

function openModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay2.classList.add('active')
}

function closeModal2(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay2.classList.remove('active')
}

//nav bar 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//intersection observer
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


