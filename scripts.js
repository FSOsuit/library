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

//creates a book div every time new book is added.  need to fix checkmark showing on.
function createBookCard(Book) {
    const book = document.createElement('div');
    book.setAttribute("id", "bookDiv");
    const checkBox = document.getElementById('read');
    let text = "";
    for (let key in Book) {
        if (key == "read") { // looks for read key 
            if (checkBox.checked) {  // if checked does something
                Book[read] = "Read";
                text += Book[read];
            }
            else if (!checkBox.checked) { //if unchecked does something else
                Book[read] = "Not read";
                text += Book[read];
            }
        }
        else {
            text += `${Book[key]} `;
        }
    }
    book.textContent = text;
    document.body.appendChild(book);
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
    createBookCard(book)
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
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    
}



