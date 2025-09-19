function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice === 1)
        return "rock";
    if(choice === 2)
        return "scissor";
    if(choice === 3)
        return "rock";

    return null;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissor: ");
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === "rock")
        return "rock";
    else if(humanChoice === "paper")
        return "paper";
    else if(humanChoice === "scissor")
        return "scissor";
    else {
        alert("Invalid Choice");
        return null;
    }
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice === humanChoice)
        return 0;
    else if(computerChoice === "rock")
        return humanChoice === "paper" ? 1 : 2;
    else if(computerChoice === "paper")
        return humanChoice === "scissor" ? 1 : 2;
    else if(computerChoice === "scissor")
        return humanChoice === "rock" ? 1 : 2;
}

function playGame(computerChoice, humanChoice) {
    let humanScore = 0;
    let computerScore = 0;

    let outcome = playRound(computerChoice, humanChoice);

    if (outcome === 0) {
        console.log("Draw");
    }
    else if (outcome === 1) {
        console.log("Human Win");
        humanScore++;
    }
    else {
        console.log("Computer Win");
        computerScore++;
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playGame() {
    const rounds = 5;
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        let outcome = playRound(computerChoice, humanChoice);

        if(outcome === 0) {
            console.log("It's a draw!");
            humanScore++;
            computerScore++;
        }
        else if(outcome === 1) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
        else if(outcome === 2) {
            console.log(`You lose! ${humanChoice} can't beat ${computerChoice}`);
            computerScore++;
        }

        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if(humanScore > computerScore)
        console.log("CONGRATULATIONS YOU WIN THE GAME!");
    else if(humanScore < computerScore)
        console.log("Aww you lost...Better luck next time!");
    else
        console.log("Nice Try! It's a Draw!");
}

playGame();