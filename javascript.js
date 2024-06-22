let humanScore = 0;
let computerScore = 0;

console.log("Starting game....");



// helper functions
function firstLetterToUpper(string) {
    return string = string[0].toUpperCase() + string.substring(1); 
}

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

function playRound(humanChoice, computerChoice) {
    let winner = '';
    // 3 tied conditions if both chose the same
    if (humanChoice === computerChoice) {
        winner = 'none';
    } else if (
            // 3 winning conditions
            (humanChoice === 'rock' && computerChoice == 'scissors') ||
            (humanChoice === 'scissors' && computerChoice == 'paper') ||
            (humanChoice === 'paper' && computerChoice == 'rock')       
        ) {
            winner = 'human';
    } else {
        // rest: 3 losing conditions
        winner = 'computer';
    }

        // print winning message
        // increment winner score
        if (winner === 'human') {
            console.log('You win this round! ' + 
                firstLetterToUpper(humanChoice) + 
                ' beats ' + 
                computerChoice);
            humanScore++;
        } else if (winner === 'computer') {
            console.log('You lose this round! ' + 
                firstLetterToUpper(computerChoice) + 
                ' beats ' + 
                humanChoice);
            computerScore++;
        } else if (winner === 'none') {
            console.log('The round is a draw!');
        } else {
            console.log('Could not calculate a winner!');       
        }

    return winner;
}

function playGame() {

    for (i = 1; i <= 5; i++) {
        console.group('Round ' + i);
        const computerSelection = getComputerChoice();
        console.log('Computer selection in round ' + i + ' : ' + computerSelection);
        const humanSelection = getHumanChoice();
        console.log('Human selection in round ' + i + ' : ' + humanSelection);
        let winner = playRound(humanSelection, computerSelection);

        console.groupEnd('Round ' + i);
    }
    console.group('Game results');
    console.log('~~~ Final result ~~~');
    console.log('Computer: ' + computerScore);
    console.log('Human: ' + humanScore); 
    if (humanScore === computerScore) {
        console.log('The game is a draw!');
    } else if (humanScore > computerScore) {
        console.log('You win the game!');
    } else {
        console.log('The computer wins!');
    }
    console.groupEnd('Game results');
}

// playGame();

// const btnRock = document.querySelector('.rock');
// const btnPaper = document.querySelector('.paper');
// const btnScissors = document.querySelector('.scissors');

// Event listeners for complete document

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
    playRound((event.target.getAttribute('class')), getComputerChoice());
    }
});
