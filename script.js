"use strict";

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
