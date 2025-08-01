


const rockBtn = document.createElement("button")
rockBtn.textContent = "rock"
const scissorsBtn = document.createElement("button")
scissorsBtn.textContent = "scissors"
const paperBtn = document.createElement("button")
paperBtn.textContent = "paper"


const resultDisplay = document.createElement("div")
const scoreDisplay = document.createElement("div")

document.body.append(rockBtn, paperBtn, scissorsBtn, resultDisplay, scoreDisplay);


let computerScore = 0
let humanScore = 0



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}



function playRound(humanChoice) {

    const computerChoice = getComputerChoice()


    if ((computerChoice == "rock" && humanChoice == "scissors") || 
        (computerChoice == "scissors" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "rock") ){
            computerScore++
            resultDisplay.innerHTML = "You: " + humanChoice + "<br>Computer: " + computerChoice + "<br>You lose! " + computerChoice + " beats " + humanChoice
    }
    
    else if ((humanChoice == "rock" && computerChoice == "scissors")||
        (humanChoice == "scissors" && computerChoice == "paper")||
        (humanChoice == "paper" && computerChoice == "rock")) {
            humanScore++
            resultDisplay.innerHTML = "You: " + humanChoice + "<br>Computer: " + computerChoice + "<br>You win! " + humanChoice + " beats " + computerChoice
    }
    else { 
        resultDisplay.textContent = "It's a tie! Both chose " + humanChoice
    }

    scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`

    if (computerScore ==  5 || humanScore == 5) {
        if (computerScore == 5) {
            resultDisplay.textContent = "Winner: Computer!"
        } else {
            resultDisplay.textContent = "Winner: You!"
        }

        // Reset scores
        computerScore = 0;
        humanScore = 0;
    }
}

// Initialize display
scoreDisplay.textContent = "Player: 0 - Computer: 0";
resultDisplay.textContent = "Make your choice!";


rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));