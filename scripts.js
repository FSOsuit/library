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


//creates a book div every time new book is added.
function createBookCard(Book) {
    const content = document.getElementById('content');
    const book = document.createElement('div');
    book.setAttribute("id", "bookDiv");
    book.setAttribute("class","bookDiv");
    const checkBox = document.getElementById('read');
    for (let key in Book) {
        const bookAttribute = document.createElement('div');
        if (key == "read") { // looks for read key 
            if (checkBox.checked) {  // if checked does something
                Book[read] = "Read";
                bookAttribute.textContent = `Status: ${Book[read]}`;
                book.appendChild(bookAttribute);
            }
            else if (!checkBox.checked) { //if unchecked does something else
                Book[read] = "Not Read";
                bookAttribute.textContent = `Status: ${Book[read]}`;
                book.appendChild(bookAttribute);
            }
        }
        else if (key == "title") {
            bookAttribute.textContent = `Title of the book: ${Book[key]}`;
            book.appendChild(bookAttribute);
        }
        else if (key == "author") {
            bookAttribute.textContent = `Author: ${Book[key]}`;
            book.appendChild(bookAttribute);
        }
        else if (key == "pages") {
            bookAttribute.textContent = `Pages: ${Book[key]}`;
            book.appendChild(bookAttribute);
        }
    }
    
    book.dataset.order = myLibrary.length-1;
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        book.remove();
        myLibrary.splice(Number(book.dataset.order, 1));
    });
    book.appendChild(deleteBtn);
    content.appendChild(book);
    book.style.display = "block";
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
    createBookCard(book);
    event.preventDefault();
})

//open/close form and make button disappear and clears inputs of form
function openForm() {
    document.getElementById("addBookBtn").style.display = "none";
    document.getElementById("myForm").style.display = "block";
    const inputs = document.querySelectorAll("#title, #author, #pages");

    inputs.forEach(input => {
        input.value = '';
    });
    addBlur();
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("addBookBtn").style.display = "block";
    removeBlur();
    event.preventDefault();
}

function addBlur() {
    document.getElementById("header").classList.add("blur");
    document.getElementById("addBook").classList.add("blur");
    document.getElementById("footer").classList.add("blur");
    document.getElementById("content").classList.add("blur");
}

function removeBlur() {
    document.getElementById("header").classList.remove("blur");
    document.getElementById("addBook").classList.remove("blur");
    document.getElementById("footer").classList.remove("blur");
    document.getElementById("content").classList.remove("blur");

}

//complete the rest objectives of the project
//gaps between divs on cards
//remove preadded text on divs
//reduce height of bookdivs
//make delete btn pretier
//do not allow to add form before filling input fields

