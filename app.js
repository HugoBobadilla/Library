const newBookBtn = document.getElementById("newBookBtn");
const formModalContainer = document.getElementById("form-container");
const close = document.getElementById("close");
const titleField = document.getElementById("title");
const authorField = document.getElementById("author");
const pagesField = document.getElementById("pages");
const readCheckbox = document.getElementById("read");
let booksContainer = document.getElementById("books-container");
const addBookBtn = document.getElementById("addBookBtn");
const form = document.getElementById("add-book-form");

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


let myLibrary = JSON.parse(localStorage.getItem('books')) || [];

function displayBooks() {
    myLibrary.map(book => {
        
        booksContainer.innerHTML += `
        <div class="book">
            <h2 class="title">${book.title}</h2>
            <p class="author"><span>Author: </span>${book.author}</p>
            <p class="pages"><span>Pages: </span>${book.pages}</p>
            <p class="read"><span>Read: </span>${book.read ? 'Yes' : 'No'}</p>
        </div>
        `;
    });
}

function addBookToLibrary(e) {
    e.preventDefault();
    let book = {
        id: Math.floor(Math.random() * 1000000),
        title: titleField.value,
        author: authorField.value,
        pages: pagesField.value,
        read: readCheckbox.checked ? true : false
    }

    myLibrary.push(book);
    localStorage.setItem("books", JSON.stringify(myLibrary));

    booksContainer.innerHTML += `
        <div class="book">
            <h2 class="title">${book.title}</h2>
            <p class="author"><span>Author: </span>${book.author}</p>
            <p class="pages"><span>Pages: </span>${book.pages}</p>
            <p class="read"><span>Read: </span>${book.read ? 'Yes' : 'No'}</p>
        </div>
    `;

    formModalContainer.style.display = "none";

    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    readCheckbox.checked = false;

}

displayBooks();
form.addEventListener("submit", addBookToLibrary);
