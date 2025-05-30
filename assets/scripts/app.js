const backdrop = document.getElementById('backdrop');
const movieModal = document.getElementById('add-modal');
const movieModalContent = movieModal.firstElementChild;
const input = movieModalContent.querySelectorAll('input');
const movieModalAction = movieModal.lastElementChild;
const cancel = movieModalAction.firstElementChild;
const add = movieModalAction.lastElementChild;
const addMovieButton = document.querySelector('header').lastElementChild;
const renderMovie = document.getElementById('movie-list');

console.log(
  backdrop,
  movieModal,
  movieModalContent,
  input,
  movieModalAction,
  cancel,
  add,
  addMovieButton,
  renderMovie
);

function toggleBackdrop() {
  backdrop.classList.toggle('visible');
}

function toggleMovieModal() {
  movieModal.classList.toggle('visible');
  toggleBackdrop();
}

function getInput() {
  const userInput = {
    text: input[0].value,
    image: input[1].value,
    rating: input[2].value,
  };
  displayInput(userInput);
}

function displayInput(userInput) {
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
  toggleMovieModal();
}

addMovieButton.addEventListener('click', toggleMovieModal);
cancel.addEventListener('click', toggleMovieModal);
add.addEventListener('click', getInput);
backdrop.addEventListener('click', toggleMovieModal);
