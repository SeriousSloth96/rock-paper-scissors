function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    const choice = prompt("Type 'rock' for rock, 'paper' for paper or 'scissors' for scissors").toLowerCase();
    return (choice === "rock" || choice === "paper" || choice === "scissors") ? choice : null;
}



function playGame(){
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice){ 
        if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                console.log("You win. Paper beats rock.");
                humanScore++;
            }else if(computerChoice === "scissors"){
                console.log("You lose. Scissors beat paper.");
                computerScore++;
            }else{
                console.log("Its a tie. You both chose paper.")
            }
        }else if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log("Its a tie. You both chose rock.")
            }else if(computerChoice === "scissors"){
                console.log("You win. Rock beats scissors.");
                humanScore++;
            }else{
                console.log("You lose. Paper beats rock.");
                computerScore++;
            }
        }else if (humanChoice=== "scissors"){
            if (computerChoice === "rock"){
                console.log("You lose. Rock beat scissors.");
                computerScore++;
            }else if(computerChoice === "scissors"){
                console.log("Its a tie. You both chose scissors.")
            }else{
                console.log("You win. Scissors beat paper.");
                humanScore++;
            }
        }else{
            console.log("Invalid choice. Try again.");
            return 0;
        }
        return 1;
    }

    let continueLoop = true;
    let validRounds = 0;
    let invalidRounds = 0;

    while(continueLoop){
        if (playRound(getHumanChoice(),getComputerChoice()) === 1){
            validRounds++;
        }else{
            invalidRounds++;
        }
        if (validRounds >= 5){
            continueLoop = false;
        }else if (invalidRounds > 3){
            console.log("Too many invalid choices!");
            return;
        }
    }

    console.log(`Final score is human:'${humanScore}:${computerScore}':computer.`);
    console.log(computerScore > humanScore ? "You lose." : humanScore > computerScore ? "You win." : "Its a tie."); 

}

