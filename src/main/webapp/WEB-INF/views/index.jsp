<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Poker Dice Game</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="game-wrapper">

    <div class="player player-left">
        <img src="/images/player1.jpg" class="avatar" alt="Player 1">
        <h2>Player 1</h2>
        <p class="coins" id="coins-p1">Coins: 100</p>
        <div class="dice-container" id="player1-dice"></div>
        <button class="roll-button" id="roll-p1" disabled>Roll Player 1</button>
        <button class="reroll-button" id="reroll-p1" disabled>Reroll Selected</button>
        <button class="end-turn-button" id="end-turn-p1" disabled>End Turn</button>
    </div>

    <div class="game-center">
        <select id="player-bet" class="bet-select">
            <option value="">Choose player to bet on...</option>
            <option value="player1">Player 1</option>
            <option value="player2">Player 2</option>
        </select>

        <select id="combo-bet" class="bet-select">
            <option value="">Choose combination...</option>
            <option value="Five of a kind">Five of a kind</option>
            <option value="Four of a kind">Four of a kind</option>
            <option value="Full House">Full House</option>
            <option value="Three of a kind">Three of a kind</option>
            <option value="Two Pair">Two Pair</option>
            <option value="One Pair">One Pair</option>
            <option value="Nothing">Nothing</option>
        </select>

        <button class="start-button" id="start-game">Start Game</button>

        <div class="scoreboard">
            <div id="result">Choose your bet and start the game</div>
        </div>
    </div>

    <div class="player player-right">
        <img src="/images/player2.jpg" class="avatar" alt="Player 2">
        <h2>Player 2</h2>
        <p class="coins" id="coins-p2">Coins: 100</p>
        <div class="dice-container" id="player2-dice"></div>
        <button class="roll-button" id="roll-p2" disabled>Roll Player 2</button>
        <button class="reroll-button" id="reroll-p2" disabled>Reroll Selected</button>
        <button class="end-turn-button" id="end-turn-p2" disabled>End Turn</button>

    </div>
</div>

<script src="/js/script.js"></script>
</body>
</html>

