// Leaving these two arrays outside of the flipCard function since we want them to have global scope.
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//Function to store the steps to check for a match.
var checkForMath = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
};

// Function to store all steps that should happen when the user flips a card.

var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
    //adding the card user flipped to cardsInPlay array
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMath();
    }

    //If statement that checks if length of cardsInPlay array is 2
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else if (cardsInPlay[0] !== cardsInPlay[1]) {
            alert("Sorry, try again.");
        }
    }
};

flipCard(0);
flipCard(2);








