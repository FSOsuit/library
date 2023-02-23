let myLibrary = [];

function Book(title, author, pages, read) {
    //The constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary(book) {
    myLibrary.push(book);
};

//creates a book div every time new book is added.  need to fix checkmark showing on and disappearing div if all fields are filled.
function createBookCard(Book) {
    const book = document.createElement('div');
    let text = "";
    for (let key in Book) {
        text += Book[key];
    }
    book.textContent = text;
    document.body.appendChild(book);
    book.style.display = "block";
    
}

function displayBook() {

}

//declaring variables for constructor
let title;
let author;
let pages;
let read;


//creates new instance of the book after pressing submit button
let submit = document.getElementById("submit");
submit.addEventListener('click', () => {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    createBookCard(book)
    event.preventDefault();
})

//open/close form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



