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

//function to loop through library and display book.
function displayBook(array) {
    for (let book in array) { // loop through myLibrary
        const book1 = array[book]; //store object of array
        for (const property in book1){ //loop through the object 
            let bookProperty = `${book1[property]}`; // create variable of the value of the object
            let bookTitle = document.createElement('div'); // create new div element for object of myLibrary
            document.body.appendChild(bookTitle) // append the element to the body
            bookTitle.textContent = bookProperty; // add text content to div
        } // TO DO fix, checkbox showing on!!!MUST READ !!!displays books, but everytime submit is pressed loops through myLibrary from the begining.!!!! 
    }
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
    displayBook(myLibrary);
})

//open/close form 

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



