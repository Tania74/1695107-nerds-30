const writeLink = document.querySelector(".write-us");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".modal-form");
const modalName = modalPopup.querySelector(".modal-name-input");
const modalEmail = modalPopup.querySelector(".modal-email-input");

const slider = document.querySelector(".features");
const sliderOne = slider.querySelector(".slider_one");
const sliderTwo = slider.querySelector(".slider_two");
const sliderThree = slider.querySelector(".slider_three");
const buttonOne = slider.querySelector(".button_slider_one");
const buttonTwo = slider.querySelector(".button_slider_two");
const buttonThree = slider.querySelector(".button_slider_three");
/*модальное окно*/

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
  modalName.focus();
  }
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});
modalForm.addEventListener("submit", function (evt) {
if (!modalName.value || !modalEmail.value)  {
  evt.preventDefault();
  modalPopup.classList.add("modal-error");
  modalPopup.offsetWidth = modalPopup.offsetWidth;
  modalPopup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
  localStorage.setItem("name", modalName.value);
  localStorage.setItem("email", modalEmail.value);}
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
});

/* переключение слайдера */


buttonOne.addEventListener("click", function(slideChange) {
    sliderOne.classList.add("sliders_current");
    sliderTwo.classList.remove("sliders_current");
    sliderThree.classList.remove("sliders_current");
    buttonOne.classList.add("current");
    buttonTwo.classList.remove("current");
    buttonThree.classList.remove("current");
})

buttonTwo.addEventListener("click", function(slideChange) {
    sliderOne.classList.remove("sliders_current");
    sliderTwo.classList.add("sliders_current");
    sliderThree.classList.remove("sliders_current");
    buttonOne.classList.remove("current");
    buttonTwo.classList.add("current");
    buttonThree.classList.remove("current");
})

buttonThree.addEventListener("click", function(slideChange) {
    sliderOne.classList.remove("sliders_current");
    sliderTwo.classList.remove("sliders_current");
    sliderThree.classList.add("sliders_current");
    buttonOne.classList.remove("current");
    buttonTwo.classList.remove("current");
    buttonThree.classList.add("current");
})
