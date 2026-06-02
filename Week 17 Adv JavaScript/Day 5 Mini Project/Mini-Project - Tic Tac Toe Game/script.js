const board = Array(9).fill("")
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

let player ="";
let computer = ""
let difficulty = "easy"
let gameOver = false;

const cells = document.querySelectorAll(".cell")
const statusText = document.getElementById("status")
const restartBtn = document.getElementById("restart")

function chooseSymbol(symbol){
    player = symbol
    computer = symbol === "X" ? "O" : "X"  //if symbol is x then computer is o else computer is x 
    
    statusText.textContent= `You are ${player}`
    cells.forEach(cell =>{ //For each item, temporarily call it cell
        cell.addEventListener("click", playerMove)
    })
}
function setDifficulty(level){
    difficulty = level
    statusText.textContent = `Dificulty: ${level}`
}

function playerMove(event){
    if(gameOver) return;
    const index = event.target.id; //Gets clicked cell's ID.
    if(board[index] !=="") return;//if not empty, stop
    board[index] = player  //stores player symbol
    event.target.textContent = player 

    if(checkWinner(player)){
        endGame("You Win!")
        return
    }

    if(isFinite()){
        endGame("Tie Game")
        return
    }

    computerMove()

}