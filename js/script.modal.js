const writeLink = document.querySelector(".write-us");
const modalPopup = document.querySelector(".modal");
const modalClose = modalPopup.querySelector(".modal-close");
const modalForm = modalPopup.querySelector(".modal-form");
const modalName = modalPopup.querySelector(".modal-name-input");
const modalEmail = modalPopup.querySelector(".modal-email-input");


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
