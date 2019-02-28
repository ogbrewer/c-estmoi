// user picks either rock, paper, or scissors 
var userChoice = prompt("Pick either rock, paper, or scissors");

// computer picks either rock, paper, or scissors
var computerChoices = ["rock", "paper", "scissors"];
var computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];

document.getElementById("computer-choice").textContent = computerChoice;
document.getElementById("user-choice").textContent = userChoice;
var message = document.getElementById("message");

// if user picks what the computer picks
// the game is a tie
if(userChoice === computerChoice) {
    message.textContent = "It's a tie!";
} else if (userChoice === "scissors" && computerChoice === "rock") {
    // if the user picks scissors 
    // and the computer picks for rock 
    // the computer wins
    message.textContent = "Computer Wins!";
} else if (userChoice === "paper" && computerChoice === "rock") {
    // if the user picks paper 
    // and the computer picks rock 
    // the user wins 
    message.textContent = "The user wins!";
} else if (userChoice === "paper" && computerChoice === "scissors") {
    // if the user picks paper 
    // and the computer picks scissors 
    // the computer wins 
    message.textContent = "Computer Wins!";
} else if (userChoice === "rock" && computerChoice === "scissors") {
     // if the user picks rock 
    // and the computer picks scissors 
    // the user wins 
    message.textContent = "The user wins!";
} else if (userChoice === "rock" && computerChoice === "paper") {
    // if the user picks rock 
    // and the computer picks paper 
    // the computer wins
    message.textContent = "The computer wins!"; 
} else if (userChoice === "scissors" && computerChoice === "paper") {
    // if the user picks scissors 
    // and the computer picks paper 
    // the user wins
    message.textContent = "The user wins!";
} else {
    message.textContent = "User must pick either rock, paper, or scissors";
}