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