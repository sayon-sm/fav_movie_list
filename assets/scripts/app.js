const addMovieButton = document.querySelector('header').lastElementChild;
const addMovieModal = document.getElementById('add-modal');

function movieModal() {
  addMovieModal.classList.toggle('visible');
}

addMovieButton.addEventListener('click', movieModal);
console.log(addMovieButton, addMovieModal);
