/* eslint-disable no-restricted-syntax */
const myLibrary = [];
const submitBtn = document.querySelector("#form-btn");
const addBtn = document.querySelector("#add-btn");
const form = document.querySelector("#form-section");
const closeForm = document.querySelector("span");
const inputs = document.querySelectorAll("input");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = pages;
  this.hasRead = read;
}

function close() {
  form.style.display = "none";

  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = "";
  }

  document.querySelector("#read").checked = false;
}

function addBookToLibrary(library) {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const numOfPages = document.querySelector("#pages");
  const hasRead = document.querySelector("#read");
  const newBook = new Book(
    title.value,
    author.value,
    numOfPages.value,
    hasRead.checked
  );

  for (const value of Object.values(newBook)) {
    if (value === "") return close();
  }

  library.push(newBook);
  return close();
}

function displayBooks() {
  const libraryDisplay = document.querySelector("#library");
  libraryDisplay.textContent = "";

  for (let i = 0; i < myLibrary.length; i += 1) {
    const row = document.createElement("tr");
    const titleData = document.createElement("td");
    const authorData = document.createElement("td");
    const pagesData = document.createElement("td");
    const readData = document.createElement("td");

    titleData.textContent = myLibrary[i].title;
    authorData.textContent = myLibrary[i].author;
    pagesData.textContent = myLibrary[i].numOfPages;
    readData.textContent = myLibrary[i].hasRead;

    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(pagesData);
    row.appendChild(readData);
    libraryDisplay.appendChild(row);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(myLibrary);
  displayBooks();
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "block";
  document.querySelector("#title").autofocus = true;
});

closeForm.addEventListener("click", () => {
  close();
});
