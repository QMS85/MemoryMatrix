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
        if (lockBoard || this === firstCard) return; 

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;

    }

}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
}
shuffle();

