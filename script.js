let trackComputerWin = 0;
let trackPlayerWin = 0;
let trackDraw = 0;
const text = document.createElement("div");
const container = document.querySelector(".container");



let isOne = 0;
function computerPlay() {
  let rand = Math.floor(Math.random() * 3 + 1);
  if (rand == 1) return "ROCK";
  else if (rand == 2) return "SCISSOR";
  else return "PAPER";
}

function playRound(id) {   
  let computerSelection = computerPlay();

  text.setAttribute("style", "white-space: pre;");

  container.textContent = "";
  text.textContent = `Player Selection : ${id.toUpperCase()}`;
  text.textContent += `\nComputer Selection: ${computerSelection}\n`;

  if (id === "rock") {
    if (computerSelection == "SCISSOR") {
      text.textContent += "\nYou win! rock beats scissor \r\n";
      trackPlayerWin++;
    } else if (computerSelection == "PAPER") {
      text.textContent += "\nYou lose! paper beats rock \r\n";
      trackComputerWin++;
    } else text.textContent += "\nDraw \r\n";
    {
      trackDraw++;
    }
  } else if (id === "scissor") {
    if (computerSelection == "PAPER") {
      text.textContent += "\nYou win! scissor beats paper \r\n";
      trackPlayerWin++;
    } else if (computerSelection == "ROCK") {
      text.textContent += "\nYou lose! rock beats scissor \r\n";
      trackComputerWin++;
    } else {
      text.textContent += "\nDraw  \r\n";
      trackDraw++;
    }
  } else if (id === "paper") {
    if (computerSelection == "ROCK") {
      text.textContent += "\nYou win! paper beats rock \r\n";
      trackPlayerWin++;
    } else if (computerSelection == "SCISSOR") {
      text.textContent += "\nYou lose! scissor beats paper \r\n";
      trackComputerWin++;
    } else {
      text.textContent += "\nDraw \r\n";
      trackDraw++;
    }
  }

  text.textContent +=
    "\nPlayer win: " +
    trackPlayerWin +
    "     Computer win : " +
    trackComputerWin;

  container.appendChild(text);

  console.log("player loss " + trackComputerWin);
  console.log("player win " + trackPlayerWin);
}

function firstToFive(id) {

  const finalText = document.createElement("div");  

  if (isOne < 1) playRound(id);
  else return; 

  if (trackComputerWin === 5 || trackPlayerWin === 5) {
    isOne++;
    if (trackPlayerWin > trackComputerWin) finalText.textContent = "You win!";
    else finalText.textContent = "You lose";
    text.textContent = "";
    container.appendChild(finalText);
  }  
}