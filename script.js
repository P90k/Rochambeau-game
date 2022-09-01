

//Rock paper scissors game 




// Create function GetComputerChoice, no parameters. Return the strings 'rock', 'paper' or 'scissors' at random.  

function getComputerChoice() {
    const rock_paper_scissors = ['rock', 'paper', 'scissors', 'rock', 'scissors', 'rock', 'scissors'];
    let choice = rock_paper_scissors[Math.floor(Math.random()*rock_paper_scissors.length)];
    return choice;
} 

function playRound()  {


    let playerSelection = this.textContent.toLowerCase();
    let computerSelection = getComputerChoice();

    let playerScore = Number(document.querySelector('.playerscore').textContent)
    let computerScore = Number(document.querySelector('.computerscore').textContent)
    const result = document.querySelector('.result');
    let rounds = playerScore + computerScore

    if (rounds >= 5) {
        if (playerScore > computerScore) result.textContent = 'YOU WON THE GAME, CONGRATULATIONS!!!!'
        else result.textContent = 'GAME OVER';
    }
    
    else if (playerSelection == computerSelection) {
        result.textContent = `The computer chose ${computerSelection}. Even, try again!`
    } 
    
    else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
            playerScore += 1;
            document.querySelector('.playerscore').textContent = playerScore;
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
            computerScore += 1;
            document.querySelector('.computerscore').textContent = computerScore;
        }
    } 
    
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
            playerScore += 1;
            document.querySelector('.playerscore').textContent = playerScore;
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
            computerScore += 1;
            document.querySelector('.computerscore').textContent = computerScore;
        }
    } 
    
    else if (playerSelection == 'scissors') { // use "else if" to make the code more readable
        if (computerSelection == 'paper') {
            result.textContent = `The computer chose ${computerSelection}. You won!`;
            playerScore += 1;
            document.querySelector('.playerscore').textContent = playerScore;
        } else {
            result.textContent = `The computer chose ${computerSelection}. You lost!`;
            computerScore += 1;
            document.querySelector('.computerscore').textContent = computerScore;
        }
    }
}


const buttons = document.querySelectorAll('.playround')

// Loop through the nodeList with forEach method. Add eventlistener click, execute function playRound()
buttons.forEach((button) => button.addEventListener('click', playRound))
