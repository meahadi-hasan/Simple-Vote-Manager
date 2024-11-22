let voteCount = 0;

function increaseVote() {
    voteCount++;
    updateDisplay();
}

function decreaseVote() {
    if (voteCount > 0) {
        voteCount--;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("voteCount").innerText = voteCount;
}
