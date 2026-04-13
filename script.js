const cards = document.querySelectorAll('.card');
const confettiContainer = document.getElementById('confetti-container');
const playAgainBtn = document.getElementById('play-again');
playAgainBtn.addEventListener('click', () => window.location.reload());

let hasFlippedCard = false; 
let firstCard, secondCard;
let lockBoard = false;
let matchesFound = 0;
const totalPairs = 8;

// Add an event listener to each card
cards.forEach(card => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
    
}
