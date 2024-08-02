"use strict";

// These are placeholders, disable when done styling
const defaultBookCount = 12;
const library = document.querySelector(".library");

for (let i = 0; i < defaultBookCount; i++) {
  const book = document.createElement("div");
  const brightness = getRandomNumber(0.75, 1.2);
  const color = getRandomNumber(0, 360);
  book.style.setProperty(
    "--book-filter",
    `hue-rotate(${color}deg) brightness(${brightness})`,
  );
  book.classList.add("book");

  const bookContent = document.createElement("div");
  bookContent.classList.add("book-content");
  book.appendChild(bookContent);

  const titleContainer = document.createElement("div");
  bookContent.appendChild(titleContainer);

  const title = document.createElement("h3");
  title.textContent = "Placeholder";
  title.classList.add("book-title");
  titleContainer.appendChild(title);

  const author = document.createElement("h4");
  author.textContent = "by Author";
  author.classList.add("book-text");
  bookContent.appendChild(author);

  const description = document.createElement("p");
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  description.classList.add("book-text");
  bookContent.appendChild(description);

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");
  bookContent.appendChild(statusContainer);

  const status = document.createElement("h4");
  status.textContent = "Status: ";
  status.classList.add("book-text");
  statusContainer.appendChild(status);

  const statusValue = document.createElement("span");
  statusValue.textContent = "Not read";
  statusValue.classList.add("book-text");
  statusContainer.appendChild(statusValue);

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
}

function updateLibrary() {
  // clear existing library display

  for (const i of myLibrary) {
    // create card for i and add to library display
  }
}

function removeBook(id) {
  // remove book of name from myLibrary

  updateLibrary();
}

function getRandomNumber(min, max) {
  return (
    Math.floor((Math.random() * (Math.abs(min) + Math.abs(max)) + min) * 100) /
    100
  );
}
