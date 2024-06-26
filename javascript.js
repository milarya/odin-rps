let humanScore = 0;
let computerScore = 0;

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

    // calculate the winner
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
    if (winner === 'human') {
        writeToLog('You win this round! ' + 
            firstLetterToUpper(humanChoice) + 
            ' beats ' + 
            computerChoice);
    } else if (winner === 'computer') {
        writeToLog('You lose this round! ' + 
            firstLetterToUpper(computerChoice) + 
            ' beats ' + 
            humanChoice);
    } else if (winner === 'none') {
        writeToLog('The round is a draw!');
    } else {
        writeToLog('Could not calculate a winner!');       
    }

    // increment winner score
    updateScore(winner);

    return winner;
}

function writeToLog(message) {
    const logDiv = document.querySelector('.score-log');
    const para = document.createElement('p');
    const messageText = document.createTextNode(message);
    para.appendChild(messageText);
    logDiv.appendChild(para);
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    const divHumanScore = document.querySelector('.score-human');
    const divComputerScore = document.querySelector('.score-computer');
    divHumanScore.innerText = 'Human score: ' + humanScore;
    divComputerScore.innerText = 'Computer score: ' + computerScore;

    if (humanScore >= 5 || computerScore >= 5) {
        finishGame();
    } else {
        // remove winner message
        document.querySelector('.score-result').innerText = 'Final result: ---';
    }
}

function finishGame() {
    // display winner#
    const divResult = document.querySelector('.score-result');
    if (humanScore > computerScore) {
         divResult.innerText = 'You win the game!';
     } else {
         divResult.innerText = 'The computer wins!';
     }
    // reset scores
    humanScore = 0;
    computerScore = 0;
    // empty log
    const logDiv = document.querySelector('.score-log');
    logDiv.innerText = 'Game log:';
}

// Event listeners for complete document
const button = document.querySelectorAll('button');

button.forEach((element) => {
    element.addEventListener('click', (event) => {
        playRound((event.target.getAttribute('class')), getComputerChoice());
    });
});
