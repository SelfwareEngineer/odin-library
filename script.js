"use strict";

const libraryRecord = {};
const libraryDisplay = document.querySelector(".library");

// This section is just for testing, remove on project completion
const defaultBookCount = 12;
let count = 0;

for (let i = 0; i < defaultBookCount; i++) {
  count++;
  addBookToLibrary("Placeholder " + count, "Author", "test", false);
}

// Start of actual script

function Book(title, author, description, read) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Work in progress, ignore this for now
function addBookToLibrary(title, author, description, read) {
  const newBook = new Book(title, author, description, read);
  libraryRecord[title] = newBook;
  updateLibraryDisplay();
}

function getNewBookNode(Book) {
  const bookElement = document.createElement("div");
  let brightness = getRandomNumber(0.5) + 1;
  const color = getRandomNumber(360);
  // const color = 25;

  if (color >= 315 || color <= 20) {
    brightness -= 0.3;
  } else if (color >= 30 && color <= 285) {
    brightness += 0.5;
  }

  bookElement.style.setProperty(
    "--book-filter",
    `hue-rotate(${color}deg) brightness(${brightness})`,
  );
  bookElement.classList.add("book");

  const bookElementContent = document.createElement("div");
  bookElementContent.classList.add("book-content");
  bookElement.appendChild(bookElementContent);

  const notStatus = document.createElement("div");
  notStatus.classList.add("not-status");
  bookElementContent.appendChild(notStatus);

  const title = document.createElement("h3");
  title.textContent = Book.title;
  title.classList.add("book-title");
  notStatus.appendChild(title);

  const author = document.createElement("h4");
  author.textContent = "by " + Book.author;
  author.classList.add("book-text");
  notStatus.appendChild(author);

  const description = document.createElement("p");
  description.textContent = Book.description;
  description.classList.add("book-text");
  notStatus.appendChild(description);

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");
  bookElementContent.appendChild(statusContainer);

  const status = document.createElement("h4");
  status.textContent = "Status: ";
  status.classList.add("book-text");
  statusContainer.appendChild(status);

  const statusValue = document.createElement("span");
  if (Book.read) {
    statusValue.textContent = "Read";
  } else {
    statusValue.textContent = "Not read";
  }
  statusValue.classList.add("book-text");
  statusContainer.appendChild(statusValue);

  return bookElement;
}

// Work in progress, ignore this for now
function updateLibraryDisplay() {
  while (libraryDisplay.firstChild) {
    libraryDisplay.removeChild(libraryDisplay.firstChild);
  }
  for (const book in libraryRecord) {
    libraryDisplay.appendChild(getNewBookNode(libraryRecord[book]));
  }
}

// Work in progress, ignore this for now
function removeBook(id) {
  // remove book of name from libraryRecord

  updateLibraryDisplay();
}

function getRandomNumber(num) {
  return Math.floor(Math.random() * num * 100) / 100;
}
