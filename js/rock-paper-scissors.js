function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const choice = prompt("Type 'rock' for rock, 'paper' for paper or 'scissors' for scissors").toLowerCase();
    return (choice === "rock" || choice === "paper" || choice === "scissors") ? choice : null;
}

let humanScore = 0, computerScore = 0;

const rockButton = document.querySelector("#option-rock");
const paperButton = document.querySelector("#option-paper");
const scissorsButton = document.querySelector("#option-scissors");
const infoBox = document.querySelector("#info");
const buttonContainer = document.querySelector("#button-container");

rockButton.addEventListener("click", () => {playRound("rock",getComputerChoice())});
paperButton.addEventListener("click", () => {playRound("paper",getComputerChoice())});
scissorsButton.addEventListener("click", () => {playRound("scissors",getComputerChoice())});


function playRound(humanChoice, computerChoice){ 
    if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore++;
            updateInfo(1,"paper","rock");
        }else if(computerChoice === "scissors"){
            computerScore++;
            updateInfo(2,"scissors","paper");
        }else{
            updateInfo(3,"paper");
        }
    }else if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            updateInfo(3,"rock");
        }else if(computerChoice === "scissors"){
            humanScore++;
            updateInfo(1,"rock","scissors");
        }else{
            computerScore++;
            updateInfo(2,"paper","rock");
        }
    }else if (humanChoice=== "scissors"){
        if (computerChoice === "rock"){
            computerScore++;
            updateInfo(2,"rock","scissors");
        }else if(computerChoice === "scissors"){
            updateInfo(3,"scissors");
        }else{
            humanScore++;
            updateInfo(1,"scissors","paper");
        }
    }
    return 1;
}

function updateInfo(outcome,winningChoice,losingChoice){
    let displayString = outcome === 1 ? "You win. " : outcome === 2 ? "You lose. " : "It's a tie.";
    displayString += outcome < 2 ? winningChoice + " beats " + losingChoice : "You both chose " + winningChoice + ".";
    displayString += "\nScore: player \"" + humanScore + "\" : \"" + computerScore + "\" computer";
    if (computerScore === 5){
        infoBox.textContent = "Computer wins.";
        buttonContainer.style.display = "none";
    }else if (humanScore === 5){
        buttonContainer.style.display = "none";
    }else{
        infoBox.textContent = displayString;
    }

}