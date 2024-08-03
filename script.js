"use strict";

const libraryRecord = {};
const libraryDisplay = document.querySelector(".library");

// This section is just for testing, remove on project completion
const defaultBookCount = 12;
let count = 0;

for (let i = 0; i < defaultBookCount; i++) {
  count++;
  addBookToLibrary("Placeholder " + count, "Author", false);
}

// Start of actual script

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Work in progress, ignore this for now
function addBookToLibrary(title, author, read) {
  const newBook = new Book(title, author, read);
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

  const bookContentTop = document.createElement("div");
  bookContentTop.classList.add("book-content-top");
  bookElementContent.appendChild(bookContentTop);

  const title = document.createElement("h3");
  title.textContent = Book.title;
  title.classList.add("book-title");
  bookContentTop.appendChild(title);

  const author = document.createElement("h4");
  author.textContent = "by " + Book.author;
  author.classList.add("book-text");
  bookContentTop.appendChild(author);

  const bookContentBottom = document.createElement("div");
  bookContentBottom.classList.add("book-content-bottom");
  bookElementContent.appendChild(bookContentBottom);

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");
  bookContentBottom.appendChild(statusContainer);

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

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("status-container");
  bookContentBottom.appendChild(buttonContainer);

  // Need to find a way to programmatically add SVGs

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
