const backdrop = document.getElementById('backdrop');
const addMovieButton = document.querySelector('header').lastElementChild;
const movieModal = document.getElementById('add-modal');
const movieModalAction = movieModal.querySelector('.modal__actions');
const cancel = movieModalAction.firstElementChild;
const add = movieModalAction.lastElementChild;

// console.log(
//   backdrop,
//   add,
//   cancel,
//   movieModalAction,
//   movieModal,
//   addMovieButton
// );

function toggleMovieModal() {
  backdrop.classList.toggle('visible');
  movieModal.classList.toggle('visible');
}

addMovieButton.addEventListener('click', toggleMovieModal);
cancel.addEventListener('click', toggleMovieModal);
add.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
