

//Rock paper scissors game 



/*
Add eventlistener to the buttons with class: playround
*/




// Create function GetComputerChoice, no parameters. Return the strings 'rock', 'paper' or 'scissors' at random.  

function getComputerChoice() {
    const rock_paper_scissors = ['rock', 'paper', 'scissors'];
    let choice = rock_paper_scissors[Math.floor(Math.random()*3)];
    return choice;
} 

// PlayerChoice




// Single round of rock-paper-scissors game. 

function playRound(playerSelection, computerSelection)  {

    const result = document.querySelector('.result')

    if (playerSelection == computerSelection) {
        result.textContent = `The computer chose ${computerSelection}. Even, try again!`
    } 
    
    else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
            
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
        }
    } 
    
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
        }
    } 
    
    else if (playerSelection == 'scissors') { // use "else if" to make the code more readable
        if (computerSelection == 'paper') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
        }
    }
}

function listener() {
    let playerSelection = this.textContent.toLowerCase()
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
}


const buttons = document.querySelectorAll('.playround')
// Loop through the nodeList with forEach method. Add eventlistener click, execute function playRound()
buttons.forEach((button) => button.addEventListener('click', listener ))
/* 
game function will play a rock-paper-scissors game in a best of five between the user and computer. 
*/

// Create function named game. 
/*
function game() {
    // create variable playerScore, datatype number. Initial value 0. 
    let rounds = 0
    // create variable computerScore, datatype number. Initial value 0.  

    // Create while loop. Condition: If playerScore or computerScore isn't 3, then continue playing the game.
    while (rounds < 5) {

        // Create variable to store player input, ask player for input. 
        // let playerChoice = prompt('What do you choose? rock, paper or scissors? '); // This will need to be prompted to user 

        // Create variable to store value of getComputerChoice function. 
            let computerChoice = getComputerChoice();

        // Create variable to store results of round in. Call the playRound function to play a round. 
        let result = playRound(playerChoice, computerChoice);

        // Interpret results from playRound function and add score to winning player. 
        if (result == `The computer chose ${computerChoice}. Even, go again!`) {
            console.log(result);
        } else if (result == `The computer chose ${computerChoice}. You won!`) {
            console.log(result);
            playerScore++;
        } else if (result == `The computer chose ${computerChoice}. You lost!`) {
            console.log(result);
            computerScore++
        }
    }

    // Determine who won the game by conditional statement. 
    if (playerScore == 3) {
        console.log('Congratulations, you won the game!')
    } else {
        console.log('GAME OVER')
    }
}

*/