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
    books.forEach(book => {
        // debugger
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.year})`;
        allLibraryBooks.appendChild(li);
    });
}

function sortBooksByTitle() {
    currentBooks.sort((a, b) => a.title.localeCompare(b.title));
    displayBooks(currentBooks);
}

displayBooks(currentBooks);
sortByTitleBtn.addEventListener('click', sortBooksByTitle);