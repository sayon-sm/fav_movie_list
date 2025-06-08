'use strict';
const backdrop = document.getElementById('backdrop');
const movieModal = document.getElementById('add-modal'); // pop-up to add movie details
const movieModalContent = movieModal.firstElementChild;
const input = movieModalContent.querySelectorAll('input'); // accessing all the input values
const movieModalAction = movieModal.lastElementChild;
const cancel = movieModalAction.firstElementChild; // button to cancel the pop-up for adding movie details
const add = movieModalAction.lastElementChild; // button to add movie as per input
const deleteModal = document.getElementById('delete-modal'); // pop-up to remove a movie from list
const addMovieButton = document.querySelector('header').lastElementChild; // button that brings up pop-up to add movie details
const renderMovie = document.getElementById('movie-list'); // unordered list where movies are added as list items

const modals = [];

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function toggleMovieModal() {
  movieModal.classList.toggle('visible');
}

// clear input field of modal
function clearInput() {
  for (const ele of input) {
    ele.value = '';
  }
}

// stores input from input field in an object & validates, triggered by add button
function getInput() {
  const userInput = {
    text: input[0].value,
    image: input[1].value,
    rating: input[2].value,
  };
  if (
    userInput.text === '' ||
    userInput.image === '' ||
    !+userInput.rating ||
    +userInput.rating < 0 ||
    +userInput.rating > 5
  ) {
    alert('Incorrect User Input !');
  } else addModal(userInput);
}

// creates & displays model on page
function addModal(userInput) {
  const element = document.createElement('li');
  element.className = 'movie-element';
  // creating layout for new movie
  element.innerHTML = `
  <div class="movie-element__image">
  <img src="${userInput.image}" alt="${userInput.text}">
  </div>
  <div class="movie-element__info">
  <h2>${userInput.text}</h2>
  <p>${userInput.rating}/5 stars</p>
  </div>
  `;
  renderMovie.appendChild(element);
  clearInput();
  toggleMovieModal();
  toggleBackdrop();
  modals.push(element); // stores modal created in array

  element.addEventListener('click', deletingMovie.bind(this, element)); // adding eventlistner to later delete modal
}

function cancelModal() {
  clearInput();
  toggleMovieModal();
  toggleBackdrop();
}

function toggleDeleteModal() {
  deleteModal.classList.toggle('visible');
  backdrop.classList.toggle('visible');
}

// deletes the modal from page
function deleteMovie(element) {
  element.remove();
  toggleDeleteModal();
}

// accessing buttons from pop-up for deleting modal
function deletingMovie(element) {
  toggleBackdrop();
  const no = deleteModal.querySelector('.modal__actions').firstElementChild;
  const yes = deleteModal.querySelector('.modal__actions').lastElementChild;
  toggleDeleteModal();
  no.onclick = toggleDeleteModal;
  yes.onclick = deleteMovie.bind(this, element);
  toggleBackdrop();
}

addMovieButton.addEventListener('click', () => {
  toggleMovieModal();
  toggleBackdrop();
});
cancel.addEventListener('click', cancelModal);
add.addEventListener('click', getInput);
backdrop.addEventListener('click', () => {
  toggleBackdrop();
  if (movieModal.classList.contains('visible')) {
    movieModal.classList.remove('visible');
  }
  if (deleteModal.classList.contains('visible')) {
    deleteModal.classList.remove('visible');
  }
});
