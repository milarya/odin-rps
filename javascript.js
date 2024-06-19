console.log("Starting game....");

// calculate computer choice

function getComputerChoice() {
    // INIT variable for random number
    let randomOfThree;
    // COMPUTE random number from 1-3
    // SET computed number to variable
    randomOfThree = Math.floor((Math.random() * 3)) + 1;
    // CALCULATE choice corresponding to random number
    if (randomOfThree === 1) {
        return 'rock';
    } else if (randomOfThree === 2) {
        return 'paper'
    } else if (randomOfThree === 3) {
        return 'scissors'
    } else {
        console.log('No valid random number for this game!');
    }
}

console.log('Computer choice is: '+ getComputerChoice());

function getHumanChoice(message = 'Please enter your choice. It can be \'rock\', \'paper\' or \'scissors\'') {
    // prompt the user to input his choice
    let rawHumanChoice = prompt(message, 'rock');
    // convert input to lower case
    let sanitizedHumanChoice = rawHumanChoice.toLowerCase();
    // check if the choice is valid:
        // IF choice is 'rock' or 'paper' or 'scissors' THEN return choice
        // ELSE prompt user again
    if (sanitizedHumanChoice === 'rock' || sanitizedHumanChoice === 'paper' || sanitizedHumanChoice === 'scissors') {
        return sanitizedHumanChoice;
    } else {
        return getHumanChoice('This choice is not valid. Please enter again or use the suggestion.', 'rock');
    }
    // return choice
}

console.log('Human choice is: ' + getHumanChoice());