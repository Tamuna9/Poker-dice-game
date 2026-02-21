// DOM content loaded
document.addEventListener("DOMContentLoaded", () => {

// Player 1 buttons
const rollP1Btn = document.getElementById("roll-p1");
const rerollP1Btn = document.getElementById("reroll-p1");
const endTurnP1Btn = document.getElementById("end-turn-p1");

// Player 2 buttons
const rollP2Btn = document.getElementById("roll-p2");
const rerollP2Btn = document.getElementById("reroll-p2");
const endTurnP2Btn = document.getElementById("end-turn-p2");

// Game controls
const startGameBtn = document.getElementById("start-game");
const comboBet = document.getElementById("combo-bet");
const playerBet = document.getElementById("player-bet");

// Dice display containers
const dice1 = document.getElementById("player1-dice");
const dice2 = document.getElementById("player2-dice");
const resultBox = document.getElementById("result");

// Player state
let player1Coins = 100;
let player2Coins = 100;
let player1Rolls = 0;
let player2Rolls = 0;
let selectedDiceP1 = new Set();
let selectedDiceP2 = new Set();
let player1Dice = [1, 1, 1, 1, 1];
let player2Dice = [1, 1, 1, 1, 1];

//Dice images
const DICE_IMAGES = [
"/images/1.webp",
"/images/2.png",
"/images/3.jpg",
"/images/4.jpg",
"/images/5.jpg",
"/images/6.jpg"
];


let player1Result = null;
let player2Result = null;


// Start game
startGameBtn.addEventListener("click", () => {
if (!comboBet.value || !playerBet.value) {
alert("Choose both player and combination to bet on!");
return;
}
// Reset dice, rolls,UI
resetGame();
rollP1Btn.disabled = false;
resultBox.textContent = "Player 1, it's your turn to roll!";
});

//Player 1 Roll
rollP1Btn.addEventListener("click", async () => {
const res = await fetch("/api/roll");
const data = await res.json();
player1Dice = data.dice;
player1Rolls = 1;
selectedDiceP1.clear();
drawDice(dice1, player1Dice, selectedDiceP1);
enableDiceSelection(dice1, selectedDiceP1);

rollP1Btn.disabled = true;
rerollP1Btn.disabled = false;
endTurnP1Btn.disabled = false;

resultBox.textContent = "Player 1: Select dice and choose to reroll or end turn";
});
//Player 1 Re-roll
rerollP1Btn.addEventListener("click", async () => {
if (player1Rolls >= 3) return;

for (let i = 0; i < 5; i++) {
if (selectedDiceP1.has(i)) {
// Re-roll only selected Dice
const res = await fetch("/api/roll");
const data = await res.json();
player1Dice[i] = data.dice[0];
}
}

player1Rolls++;
selectedDiceP1.clear();
drawDice(dice1, player1Dice, selectedDiceP1);
enableDiceSelection(dice1, selectedDiceP1);

if (player1Rolls === 3) {
rerollP1Btn.disabled = true;
endTurnP1Btn.disabled = true;
player1Result = await fetchCombination(player1Dice);
rollP2Btn.disabled = false;
resultBox.textContent = "Player 2: Your turn to roll!";
} else {
resultBox.textContent = `Player 1: ${3 - player1Rolls} rerolls left`;
}
});

// Player 1 End Turn
endTurnP1Btn.addEventListener("click", async () => {
rerollP1Btn.disabled = true;
endTurnP1Btn.disabled = true;
player1Result = await fetchCombination(player1Dice);
rollP2Btn.disabled = false;
resultBox.textContent = "Player 2: Your turn to roll!";
});

// Player 2Roll
rollP2Btn.addEventListener("click", async () => {
const res = await fetch("/api/roll");
const data = await res.json();
player2Dice = data.dice;
player2Rolls = 1;
selectedDiceP2.clear();
drawDice(dice2, player2Dice, selectedDiceP2);
enableDiceSelection(dice2, selectedDiceP2);

rollP2Btn.disabled = true;
rerollP2Btn.disabled = false;
endTurnP2Btn.disabled = false;

resultBox.textContent = "Player 2: Select dice and choose to reroll or end turn";
});
// Player 2 Re-Roll
rerollP2Btn.addEventListener("click", async () => {
if (player2Rolls >= 3) return;

for (let i = 0; i < 5; i++) {
if (selectedDiceP2.has(i)) {
const res = await fetch("/api/roll");
const data = await res.json();
player2Dice[i] = data.dice[0];
}
}

player2Rolls++;
selectedDiceP2.clear();
drawDice(dice2, player2Dice, selectedDiceP2);
enableDiceSelection(dice2, selectedDiceP2);

if (player2Rolls === 3) {
rerollP2Btn.disabled = true;
endTurnP2Btn.disabled = true;
player2Result = await fetchCombination(player2Dice);
showResult();
} else {
resultBox.textContent = `Player 2: ${3 - player2Rolls} rerolls left`;
}
});

// Player 1 End Turn
endTurnP2Btn.addEventListener("click", async () => {
rerollP2Btn.disabled = true;
endTurnP2Btn.disabled = true;
player2Result = await fetchCombination(player2Dice);
showResult();
});

// Draw Dice on screen
function drawDice(container, diceArray, selectedSet = new Set()) {
container.innerHTML = "";
diceArray.forEach((die, i) => {
const img = document.createElement("img");
img.src = DICE_IMAGES[die - 1];
img.alt = `Dice ${die}`;
img.style.width = "100%";
img.style.height = "100%";

const dieDiv = document.createElement("div");
dieDiv.className = "die";
if (selectedSet.has(i)) dieDiv.classList.add("selected");
dieDiv.appendChild(img);
container.appendChild(dieDiv);
});
}

// Fetch combination result from backend
async function fetchCombination(diceArray) {
const res = await fetch("/api/roll/custom", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ dice: diceArray })
});
return await res.json();
}

// Update coin display
function updateCoinDisplay() {
document.getElementById("coins-p1").textContent = `Coins: ${player1Coins}`;
document.getElementById("coins-p2").textContent = `Coins: ${player2Coins}`;
}

// Show game result  and update coins
function showResult() {
const rank = {
"Five of a kind": 6,
"Four of a kind": 5,
"Full House": 4,
"Three of a kind": 3,
"Two Pair": 2,
"One Pair": 1,
"Nothing": 0
};

// Determine winner by rank
const winner =
rank[player1Result.combination] > rank[player2Result.combination]
? "Player 1"
: rank[player1Result.combination] < rank[player2Result.combination]
? "Player 2"
: "Draw";

const betOn = playerBet.value;
const betCombo = comboBet.value;

let betMatched = false;
if (betOn === "player1") betMatched = player1Result.combination === betCombo;
if (betOn === "player2") betMatched = player2Result.combination === betCombo;

// Update coins based on bet outcome
if (betOn === "player1") {
player1Coins += betMatched ? 50 : -20;
} else if (betOn === "player2") {
player2Coins += betMatched ? 50 : -20;
}

updateCoinDisplay();

// Display result in the UI
resultBox.innerHTML = `
<strong>${winner} wins!</strong><br>
Player 1: ${player1Result.combination}<br>
Player 2: ${player2Result.combination}<br>
You bet on ${betOn === "player1" ? "Player 1" : "Player 2"} to get <em>${betCombo}</em>:<br>
${betMatched ? "✅ Success! +50 coins" : "❌ Missed. -20 coins"}
`;
}

// Reset game
function resetGame() {
player1Result = null;
player2Result = null;
player1Rolls = 0;
player2Rolls = 0;
dice1.innerHTML = "";
dice2.innerHTML = "";

rollP1Btn.disabled = true;
rollP2Btn.disabled = true;
rerollP1Btn.disabled = true;
rerollP2Btn.disabled = true;
endTurnP1Btn.disabled = true;
endTurnP2Btn.disabled = true;

updateCoinDisplay();
resultBox.textContent = "Game started. Player 1, roll your dice.";
}

// Enable selecting dice for Re-Roll
function enableDiceSelection(container, selectedSet) {
const dice = container.querySelectorAll(".die");
dice.forEach((div, idx) => {
div.addEventListener("click", () => {
if (selectedSet.has(idx)) {
selectedSet.delete(idx);
div.classList.remove("selected");
} else {
selectedSet.add(idx);
div.classList.add("selected");
}
});
});
}
});