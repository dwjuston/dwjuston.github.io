// Assuming you have a data structure for the books
const books = [
    {
        name: "Book Title One",
        author: "Author Name",
        year: "2021",
        description: "A brief description of Book Title One."
    },
    // Add more books
];

function loadHomePage() {
    const home = document.getElementById('home');
    // Clear existing content
    home.innerHTML = '<h2>Available Books</h2><ul>';

    books.forEach(book => {
        home.innerHTML += `
            <li>
                <a href="main.html">${book.name}</a> by ${book.author} (${book.year})
                <p>${book.description}</p>
            </li>
        `;
    });

    home.innerHTML += '</ul>';
}

document.addEventListener('DOMContentLoaded', loadHomePage);