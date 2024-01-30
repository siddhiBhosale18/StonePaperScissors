let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usreScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randInx = Math.floor(Math.random(options) * 3);
    return options[randInx];
}


const drawGame = () => {
    // console.log("Game Is Draw! Try Again.");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        usreScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}  `;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    // console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    // console.log("Computer choice=", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        // console.log(userWin);
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
            // console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });

});