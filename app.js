const newBookBtn = document.getElementById("newBookBtn");
const formModalContainer = document.getElementById("form-container");
const close = document.getElementById("close");

// When the user clicks on the button, open the modal 
newBookBtn.addEventListener("click", () => {
    formModalContainer.style.display = "block";
});

// When the user clicks on the close button, close it
close.addEventListener("click", () => {
    formModalContainer.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if(event.target === formModalContainer) {
        formModalContainer.style.display = "none";
    }
});

let myLibrary = [];

function addBookToLibrary() {

}