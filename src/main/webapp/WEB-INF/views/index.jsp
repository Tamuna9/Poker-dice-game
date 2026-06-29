<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Poker Dice Game</title>
    <link rel="stylesheet" href="/css/style.css?v=20260629-2">
</head>
<body>
<div class="page-shell">
    <div class="corner-dice" aria-hidden="true">
        <img src="/images/44.png" alt="">
        <img src="/images/55.png" alt="">
        <img src="/images/66.png" alt="">
    </div>

    <div class="corner-chips" aria-hidden="true">
        <span class="chip chip-red"></span>
        <span class="chip chip-blue"></span>
        <span class="chip chip-black"></span>
        <span class="chip chip-green"></span>
    </div>

    <header class="hero-header">
        <div class="crown" aria-hidden="true">♛</div>
        <h1><span>Poker</span> <em>Dice</em></h1>
        <p>Roll the dice. Make your best hand. Win!</p>
        <div class="suit-divider" aria-hidden="true">
            <span></span>
            <b>♠</b><b>♥</b><b>♦</b><b>♣</b>
            <span></span>
        </div>
    </header>

    <main class="game-table">
        <div class="table-main">
            <section class="player player-left" aria-labelledby="player1-name">
                <img src="/images/player1.jpg" class="avatar" alt="Player 1">
                <h2 id="player1-name">Player 1</h2>
                <p class="coins" id="coins-p1">Coins: 100</p>
                <div class="dice-container" id="player1-dice"></div>
                <div class="player-actions">
                    <button class="roll-button" id="roll-p1" disabled>Roll Player 1</button>
                    <button class="reroll-button" id="reroll-p1" disabled>Reroll Selected</button>
                    <button class="end-turn-button" id="end-turn-p1" disabled>End Turn</button>
                </div>
            </section>

            <section class="game-center" aria-label="Game controls">
                <div class="bet-controls">
                    <select id="player-bet" class="bet-select" aria-label="Player to bet on">
                        <option value="">Choose player to bet on...</option>
                        <option value="player1">Player 1</option>
                        <option value="player2">Player 2</option>
                    </select>

                    <select id="combo-bet" class="bet-select" aria-label="Poker combination">
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
                </div>

                <div class="scoreboard">
                    <div id="result">Choose your bet and start the game</div>
                </div>

                <div class="hero-die" aria-hidden="true">
                    <span class="die-glow"></span>
                    <img src="/images/66.png" alt="">
                </div>
            </section>

            <section class="player player-right" aria-labelledby="player2-name">
                <img src="/images/player2.jpg" class="avatar" alt="Player 2">
                <h2 id="player2-name">Player 2</h2>
                <p class="coins" id="coins-p2">Coins: 100</p>
                <div class="dice-container" id="player2-dice"></div>
                <div class="player-actions">
                    <button class="roll-button" id="roll-p2" disabled>Roll Player 2</button>
                    <button class="reroll-button" id="reroll-p2" disabled>Reroll Selected</button>
                    <button class="end-turn-button" id="end-turn-p2" disabled>End Turn</button>
                </div>
            </section>
        </div>

        <footer class="feature-strip" aria-label="Game features">
            <div class="feature">
                <span class="feature-icon" aria-hidden="true">♕</span>
                <p>Beat your opponent<br>and win coins</p>
            </div>
            <div class="feature">
                <span class="feature-icon" aria-hidden="true">⚄</span>
                <p>Make the best<br>poker hand</p>
            </div>
            <div class="feature">
                <span class="feature-icon" aria-hidden="true">◎</span>
                <p>Bet wisely and<br>play smart</p>
            </div>
            <div class="feature">
                <span class="feature-icon" aria-hidden="true">☆</span>
                <p>Luck, strategy<br>and fun!</p>
            </div>
        </footer>
    </main>
</div>

<script src="/js/script.js"></script>
</body>
</html>
