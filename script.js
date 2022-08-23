
/*
//Rock paper scissors game 

//The client will play against the computer in three rounds. 

// Create variable to store client_score, type of value is integer. Initial value is 0. 
// Create value to store pc_score, type of value is integer. Initial value is 0. 

// First to two wins the game.  (Best of three)

// Check if client_score or pc_score is equal to two. If not then proceed. 
// If client_score or pc_score is equal to two then check who won and announce that to the client. 

// If no one has won then proceed with below:

// Ask client for input, rock paper or scissors? 

*/



// Create function GetComputerChoice, no parameters. Return the strings 'rock', 'paper' or 'scissors' at random.  

function getComputerChoice() {
    const rock_paper_scissors = ['rock', 'paper', 'scissors'];
    let choice = rock_paper_scissors[Math.floor(Math.random()*3)];
    return choice
} 



// Single round of rock-paper-scissors game. 

function playRound(playerSelection, computerSelection)  {
    // Make the arguments case insensitive.
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return `The computer chose ${computerSelection}. Even!`
    } 
    
    else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return `The computer chose ${computerSelection}. You won!`
        } else {
            return `The computer chose ${computerSelection}. You lost!`
        }
    } 
    
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return `The computer chose ${computerSelection}. You won!`
        } else {
            return `The computer chose ${computerSelection}. You lost!`
        }
    } 
    
    else if (playerSelection == 'scissors') { // use "else if" to make the code more readable
        if (computerSelection == 'paper') {
            return `The computer chose ${computerSelection}. You won!`
        } else {
            return `The computer chose ${computerSelection}. You lost!`
        }
    }
}

