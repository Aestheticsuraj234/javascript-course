let library = [];

function addBook(title, author, publicationYear) {
    let book = {
        title: title,
        author: author,
        publicationYear: publicationYear
    };
    library.push(book);
}

function removeBookByTitle(title) {
    library = library.filter(book => book.title !== title);
}

function findBooksByAuthor(author) {
    return library.filter(book => book.author === author);
}

function findBooksPublishedAfterYear(year) {
    return library.filter(book => book.publicationYear > year);
}

// Function to sort books by publication year
function sortBooksByYear() {
    return library.sort((a, b) => a.publicationYear - b.publicationYear);
}

// Function to count books by author
function countBooksByAuthor(author) {
    return library.filter(book => book.author === author).length;
}

// Function to calculate the average publication year of books in the library
function calculateAveragePublicationYear() {
    const totalYears = library.reduce((acc, book) => acc + book.publicationYear, 0);
    return totalYears / library.length;
}

// Function to log all books in the library
function displayAllBooks() {
    library.forEach(book => console.log(`${book.title} by ${book.author} (${book.publicationYear})`));
}

// Example usage
addBook("1984", "George Orwell", 1949);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log("Initial library:");
displayAllBooks();

removeBookByTitle("1984");
console.log("\nAfter removing '1984':");
displayAllBooks();

console.log("\nBooks by Harper Lee:");
console.log(findBooksByAuthor("Harper Lee"));

console.log("\nBooks published after 1950:");
console.log(findBooksPublishedAfterYear(1950));

console.log("\nSorting books by publication year:");
console.log(sortBooksByYear());

console.log("\nNumber of books by Harper Lee:", countBooksByAuthor("Harper Lee"));

console.log("\nAverage publication year of books:", calculateAveragePublicationYear());
