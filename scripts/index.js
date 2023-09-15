// import books from '../data/books.JSON';

const books = [
    {"title": "Book 1", "author": "Author A", "year": "2001"},
    {"title": "Book 3", "author": "Author C", "year": "2003"},
    {"title": "Book 2", "author": "Author B", "year": "2002"},
    // Add more books as needed
];

const libraryBooks = document.getElementById('allLibraryBooks');
const searchBookInput = document.getElementById('searchBook');
const sortByTitleBtn = document.getElementById('sortByTitle');
const sortByAuthorBtn = document.getElementById('sortByAuthor');

let currentBooks = [...books];

// method to display all books from the data file provided
function displayBooks(books) {
    console.log("inside");
    libraryBooks.innerHTML = '';
    books && books.forEach(book => {
        // debugger
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.year})`;
        allLibraryBooks.appendChild(li);
    });
}

function sortBooksByTitle() { // sort by title
    currentBooks.sort((a, b) => a.title.localeCompare(b.title));
    displayBooks(currentBooks);
}

function sortBooksByAuthor() { // sort by author
    currentBooks.sort((a, b) => a.author.localeCompare(b.author));
    displayBooks(currentBooks);
}

function searchABook() {
    const searchInputField = searchBookInput.value.toLowerCase();
    currentBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchInputField) || book.author.toLowerCase().includes(searchInputField);
    });
    displayBooks(currentBooks);
}


displayBooks(currentBooks);
sortByTitleBtn.addEventListener('click', sortBooksByTitle);
sortByAuthorBtn.addEventListener('click', sortBooksByAuthor);
searchBookInput.addEventListener('input', searchABook);