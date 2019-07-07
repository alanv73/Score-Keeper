var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type=number]");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        updateScoreDisplay();
    }
});

p2Btn.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        updateScoreDisplay();
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function updateScoreDisplay() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
}

function reset() {
    p1Score = 0;
    p2Score = 0;
    updateScoreDisplay();
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}
