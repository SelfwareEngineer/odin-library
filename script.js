"use strict";

const libraryRecord = {};
const libraryDisplay = document.querySelector(".library");
const addBookBtn = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");

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

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");
  bookContentTop.appendChild(statusContainer);

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
  statusValue.classList.add("book-text", "book-status");
  statusContainer.appendChild(statusValue);

  const bookContentBottom = document.createElement("div");
  bookContentBottom.classList.add("book-content-bottom");
  bookElementContent.appendChild(bookContentBottom);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  bookContentBottom.appendChild(buttonContainer);

  // Need to find a way to programmatically add SVGs
  const editBookBtn = document.createElement("button");
  editBookBtn.type = "button";
  editBookBtn.classList.add("edit-book-button");
  buttonContainer.appendChild(editBookBtn);
  editBookBtn.appendChild(
    getSVG(
      "http://www.w3.org/2000/svg",
      "0 0 24 24",
      "pencil-outline",
      "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z",
    ),
  );

  const removeBookBtn = document.createElement("button");
  removeBookBtn.type = "button";
  removeBookBtn.classList.add("remove-book-button");
  buttonContainer.appendChild(removeBookBtn);
  removeBookBtn.appendChild(
    getSVG(
      "http://www.w3.org/2000/svg",
      "0 0 24 24",
      "trash-can-outline",
      "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z",
    ),
  );

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

function getSVG(xmlns, viewbox, title, path) {
  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttribute("viewbox", viewbox);

  const svgTitle = document.createElementNS(xmlns, "title");
  svgTitle.textContent = title;
  svg.appendChild(svgTitle);

  const svgPath = document.createElementNS(xmlns, "path");
  svgPath.setAttribute("d", path);
  svg.appendChild(svgPath);

  return svg;
}

// When I left off, this was triggering if I was clicking only the button but not if also clicking any of its children
document.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains("edit-book-button")) {
    dialog.showModal();
  }
});
