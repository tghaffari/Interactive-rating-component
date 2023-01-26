const $numberButton = document.querySelectorAll('.number-button');
const $ratings = document.querySelector('.ratings');
console.log($numberButton);

let selectedRating = 0;

$ratings.addEventListener('click', handleRatingClick
);

function handleRatingClick(event) {

  if (event.target.tagName === 'BUTTON') {
    for (let i = 0; i < $numberButton.length; i++) {
      if ($numberButton[i].textContent === event.target.textContent) {
        $numberButton[i].className = 'number-button circle selected';
      } else {
        $numberButton[i].className = 'number-button circle';
      }
    }
    selectedRating = Number(event.target.textContent);
  }
}
