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

function getHumanChoice(message = 'Please enter your choice. It can be \'rock\', \'paper\' or \'scissors\'') {
    // prompt the user to input his choice
    let rawHumanChoice = prompt(message, getComputerChoice());
    // convert input to lower case
    let sanitizedHumanChoice = rawHumanChoice.toLowerCase();
    // check if the choice is valid:
        // IF choice is 'rock' or 'paper' or 'scissors' THEN return choice
        // ELSE prompt user again
    if (sanitizedHumanChoice === 'rock' || sanitizedHumanChoice === 'paper' || sanitizedHumanChoice === 'scissors') {
        return sanitizedHumanChoice;
    } else {
        return getHumanChoice('This choice is not valid. Please enter again or use the suggestion.');
    }
    // return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // @todo calculate winner
    let winner = '';
    // print winning message
    // increment winner score
    if (winner === 'human') {
        console.log('You win!' + humanChoice + ' beats ' + computerChoice);
        humanScore++;
    } else if (winner === 'computer') {
        console.log('You lose!' + computerChoice + ' beats ' + humanChoice);
        computerScore++;
    } else {
        console.log('Could not calculate a winner!');
    }
}

const computerSelection = getComputerChoice();
console.log('Computer selection: ' + computerSelection);

const humanSelection = getHumanChoice();
console.log('Human selection: ' + humanSelection);



playRound(humanSelection, computerSelection);