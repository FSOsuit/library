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


let title;
let author;
let pages;
let read;

let submit = document.getElementById("submit");

//creates new instance of the book after pressing submit button
submit.addEventListener('click', () => {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
})




