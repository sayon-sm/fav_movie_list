const addMovieButton = document.querySelector('header').lastElementChild;
const movieModal = document.getElementById('add-modal');
const movieModalAction = movieModal.querySelector('.modal__actions');
const add = movieModalAction.firstElementChild;

console.log(add, movieModalAction, movieModal, addMovieButton);

function toggleMovieModal() {
  movieModal.classList.toggle('visible');
}

addMovieButton.addEventListener('click', toggleMovieModal);
add.addEventListener('click', toggleMovieModal);
