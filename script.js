
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getComputerChoice() {

    const randomNum = getRandomInt(1,3)

    if (randomNum === 1) {
        return "rock"
    } 
    if (randomNum === 2 ) {
        return "paper"
    }
    if (randomNum === 3 ) {
        return "scissors"
    }
}




function getHumanChoice() {

    const getHumanChoice = prompt("Enter your choice: ")

    if (getHumanChoice.toLowerCase() == "rock") {
        return "rock"
    }
    if (getHumanChoice.toLowerCase() == "paper" ) {
        return "paper" 
    }
    if (getHumanChoice.toLowerCase() == "scissors" ) {
        return "scissors" 
    }
}


let computerScore = 0
let humanScore = 0

function score(getHumanChoice, getComputerChoice) {

    if ((getComputerChoice == "rock" && getHumanChoice == "scissors") || 
        (getComputerChoice == "scissors" && getHumanChoice == "paper") ||
        (getComputerChoice == "paper" && getHumanChoice == "rock") ){
        computerScore += 1 
    }
    
    else if ((getHumanChoice == "rock" && getComputerChoice == "scissors")||
        (getHumanChoice == "scissors" && getComputerChoice == "paper")||
        (getHumanChoice == "paper" && getComputerChoice == "rock")) {
        humanScore += 1   
    }
}


function playRound(humanChoice, computerChoice) {

    score(humanChoice, computerChoice)

    if ((computerChoice == "rock" && humanChoice == "scissors") || 
        (computerChoice == "scissors" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "rock") ){
        console.log("You: " + humanChoice + "\nComputer: " + computerChoice + "\nYou lose! " + computerChoice + " beats " + humanChoice);
    }
    
    else if ((humanChoice == "rock" && computerChoice == "scissors")||
        (humanChoice == "scissors" && computerChoice == "paper")||
        (humanChoice == "paper" && computerChoice == "rock")) {
        console.log("You: " + humanChoice + "\nComputer: " + computerChoice + "\nYou win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        console.log("It's a tie! Both chose " + humanChoice);
    }
}

function playGame() {
    // Reset scores at start of game
    computerScore = 0
    humanScore = 0
    
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    console.log("Final Score - You: " + humanScore + " | Computer: " + computerScore);
}

playGame();


