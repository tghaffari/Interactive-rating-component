const $numberButton = document.querySelectorAll('.number-button');
const $ratings = document.querySelector('.ratings');
const $submitButton = document.querySelector('.submit-button');
const $selectedRating = document.querySelector('#selectedRating');
var $dataView = document.querySelectorAll('[data-view]');

let selectedRating = 0;

$ratings.addEventListener('click', handleRatingClick);
$submitButton.addEventListener('click', handleSubmitClick);

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

function handleSubmitClick() {
  if (selectedRating !== 0) {
    viewSwap('thank-you-page');
    $selectedRating.textContent = selectedRating;
  }
}

function viewSwap(view) {
  for (var i = 0; i < $dataView.length; i++) {
    if (view === $dataView[i].getAttribute('data-view')) {
      $dataView[i].className = 'view';
    } else {
      $dataView[i].className = 'view hidden';
    }
  }
}
