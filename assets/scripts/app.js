const backdrop = document.getElementById('backdrop');
const movieModal = document.getElementById('add-modal');
const movieModalContent = movieModal.firstElementChild;
const input = movieModalContent.querySelectorAll('input');
const movieModalAction = movieModal.lastElementChild;
const cancel = movieModalAction.firstElementChild;
const add = movieModalAction.lastElementChild;
const addMovieButton = document.querySelector('header').lastElementChild;

console.log(
  backdrop,
  movieModal,
  movieModalContent,
  input,
  movieModalAction,
  cancel,
  add,
  addMovieButton
);

function toggleMovieModal() {
  backdrop.classList.toggle('visible');
  movieModal.classList.toggle('visible');
}

function getInput() {}

addMovieButton.addEventListener('click', toggleMovieModal);
cancel.addEventListener('click', toggleMovieModal);
add.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
