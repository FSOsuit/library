let myLibrary = [];

function Book(title, author, pages, read) {
    //The constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}



function addBookToLibrary() {
    
};


let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

let submit = document.getElementById("submit");

//creates new instance of the book after pressing submit button
submit.addEventListener('click', () => {
    const book = new Book(title.value, author.value, pages.value, read.value);
    console.log(book);
})

