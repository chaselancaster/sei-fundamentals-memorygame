var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

//First card that is flipped

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log('User flipped queen');

//Second card that is flipped

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log('User flipped king');

//If statement that checks if length of cardsInPlay array is 2

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert('Sorry, try again.');
	}
}










