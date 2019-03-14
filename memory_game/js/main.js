// Leaving these two arrays outside of the flipCard function since we want them to have global scope.
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

// Function to store the steps to check for a match.
var checkForMath = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
};

// Function to store all steps that should happen when the user flips a card.

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    //adding the card user flipped to cardsInPlay array
    cardsInPlay.push(cards[cardId].rank);
    //So we can "see" the cards that are flipped in our console.
    console.log(cards[cardId].cardImage);
    console.log('Suit: ' + cards[cardId].suit);
    if (cardsInPlay.length === 2) {
        checkForMath();
    };
    
// setAttribute method to update the src attribute to the image of the card that was just clicked (img source is in the cardImage property in that card's object in the cards array)

this.setAttribute('src', cards[cardId].cardImage);

   // If statement that checks if length of cardsInPlay array is 2
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else if (cardsInPlay[0] !== cardsInPlay[1]) {
            alert("Sorry, try again.");
        }
    }
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();







