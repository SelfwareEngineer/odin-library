"use strict";

// These are placeholders, disable when done styling
const defaultBookCount = 12;
const library = document.querySelector(".library");

for (let i = 0; i < defaultBookCount; i++) {
  const book = document.createElement("div");
  book.classList.add("book");

  const title = document.createElement("h3");
  title.textContent = "Placeholder";
  book.appendChild(title);

  const author = document.createElement("h4");
  author.textContent = "by Author";
  book.appendChild(author);

  const descHeader = document.createElement("h4");
  descHeader.textContent = "Description:";
  book.appendChild(descHeader);

  const desc = document.createElement("p");
  desc.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  book.appendChild(desc);

  const status = document.createElement("h4");
  status.textContent = "Status: not read";
  book.appendChild(status);

  library.appendChild(book);
}

const myLibrary = {};

function Book(title, author, description, read) {
  self.title = title;
  self.author = author;
  self.description = description;
  self.read = read;
}

Book.prototype.toggleRead = function () {
  self.read = !self.read;
};

function addBookToLibrary(title, author, description, read) {
  myLibrary[title] = new Book(title, author, description, read);
  const newBookIndex = myLibrary.length - 1;
  return newBookIndex;
}

function updateLibrary() {
  // clear existing library display

  for (const i of myLibrary) {
    // create card for i and add to library display
  }
}

function removeBook(name) {
  // remove book of name from myLibrary

  updateLibrary();
}
