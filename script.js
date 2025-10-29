const imageDiv = document.querySelector("#image-div");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const outcomeDiv = document.querySelector("#outcome-div");

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

function getHumanChoice(choice) { 
    if(choice === "rock")
        return "rock";
    else if(choice === "paper")
        return "paper";
    else if(choice === "scissor")
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

let humanScore = 0;
let computerScore = 0;
let round = 0;
let maxRound = 5;

function insertKalbo() {
    let message = document.createElement('h1');
    message.textContent = "You Win! :D\nMAYROON KANG KALBONG WONWOO!!!";
    message.style.color = "red";
    message.style.whiteSpace = "pre-line";
    outcomeDiv.appendChild(message);

    let img = document.createElement('img');
    img.src = "./images/kalbo.jpg";
    img.style.width = "300px";
    outcomeDiv.appendChild(img);
}

function insertChaewon() {
    let message = document.createElement('h1');
    message.textContent = "You have to lock in!";
    message.style.color = "red";
    outcomeDiv.appendChild(message);

    let img = document.createElement('img');
    img.src = "./images/lock-in.gif";
    img.style.width = "300px";
    outcomeDiv.appendChild(img);
}

function playGame(event) {
    let choice = event.target.id;

    let choiceIsValid = false;
    if(choice == "rock") choiceIsValid = true;
    if(choice == "paper") choiceIsValid = true;
    if(choice == "scissor") choiceIsValid = true;
    if(!choiceIsValid) return;

    const computerChoice = getComputerChoice();
    const humanChoice = choice;
    round++;

    let outcome = playRound(computerChoice, humanChoice);
    let roundOutcomeStr = "";

    if (outcome === 0) {
        console.log("It's a draw!");
        humanScore++;
        computerScore++;
        roundOutcomeStr = "It's a draw!";
    }
    else if (outcome === 1) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        roundOutcomeStr = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (outcome === 2) {
        console.log(`You lose! ${humanChoice} can't beat ${computerChoice}`);
        computerScore++;
        roundOutcomeStr = `You lose! ${humanChoice} can't beat ${computerChoice}`;
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    updateState(roundOutcomeStr);

    if (round === maxRound) {
        roundOutcome.textContent = "";
        if (humanScore > computerScore) {
            console.log("CONGRATULATIONS YOU WIN THE GAME!");
            insertKalbo();
        }
        else if (humanScore < computerScore) {
            console.log("Aww you lost...Better luck next time!");
            insertChaewon();
        }
        else {
            console.log("Nice Try! It's a Draw!");
            insertChaewon();
        }
        imageDiv.removeEventListener('click', playGame);
        return;
    }
}

imageDiv.addEventListener('click', playGame);

const roundScore = document.querySelector("#roundScore");
const roundOutcome = document.querySelector("#roundOutcome");
function updateState(str) {
    roundScore.textContent = `You: ${humanScore}\nMasamang Nilalang: ${computerScore}`
    roundOutcome.textContent = str;
}