const backdrop = document.getElementById('backdrop');
const movieModal = document.getElementById('add-modal'); // pop-up to add movie details
const movieModalContent = movieModal.firstElementChild;
const input = movieModalContent.querySelectorAll('input'); // accessing all the input values
const movieModalAction = movieModal.lastElementChild;
const cancel = movieModalAction.firstElementChild; // button to cancel the pop-up
const add = movieModalAction.lastElementChild; // button to add movie as per input
const deleteModal = document.getElementById('delete-modal'); // pop-up to remove a movie from list
const addMovieButton = document.querySelector('header').lastElementChild; // button that brings up the mpvie modal pop-up
const renderMovie = document.getElementById('movie-list'); // unordered list where movies are added

const modals = [];

function toggleMovieModal() {
  movieModal.classList.toggle('visible');
  backdrop.classList.toggle('visible');
}

function clearInput() {
  for (ele of input) {
    ele.value = '';
  }
}

function getInput() {
  const userInput = {
    text: input[0].value,
    image: input[1].value,
    rating: input[2].value,
  };
  console.log(userInput.text, userInput.image, userInput.rating);
  if (
    userInput.text === '' ||
    userInput.image === '' ||
    +userInput.rating < 0 ||
    +userInput.rating > 6
  ) {
    alert('Incorrect User Input !');
  } else addModal(userInput);
}

function addModal(userInput) {
  const element = document.createElement('li');
  element.className = 'movie-element';
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
  modals.push(element);

  element.addEventListener('click', deletingMovie.bind(this, element));
  console.log(element);
}

function cancelModal() {
  clearInput();
  toggleMovieModal();
}

function toggleDeleteModal() {
  deleteModal.classList.toggle('visible');
  backdrop.classList.toggle('visible');
}

function deleteMovie(element) {
  element.remove();
  toggleDeleteModal();
}

function deletingMovie(element) {
  const no = deleteModal.querySelector('.modal__actions').firstElementChild;
  const yes = deleteModal.querySelector('.modal__actions').lastElementChild;
  toggleDeleteModal();
  no.addEventListener('click', toggleDeleteModal);
  yes.addEventListener('click', deleteMovie.bind(this, element));
  console.log(element);
}

addMovieButton.addEventListener('click', toggleMovieModal);
cancel.addEventListener('click', cancelModal);
add.addEventListener('click', getInput);
backdrop.addEventListener('click', toggleMovieModal);
