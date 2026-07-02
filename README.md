A full-stack web application that simulates a two-player Poker Dice game with betting functionality.

## Live Demo

[Play Poker Dice online](https://poker-dice-game-tamuna9.onrender.com/)

> The free demo server may take up to 50 seconds to wake up after a period of inactivity.

The project demonstrates backend–frontend integration using Spring Boot and JavaScript, including RESTful communication and game logic implementation.
---
## 📌 Project Overview
This application allows two players to roll dice, reroll selected dice (up to three total rolls), and automatically evaluates poker-style combinations.
A betting system is implemented, allowing the user to place a bet on a specific player and combination before the round starts.
The backend processes all combination logic, while the frontend dynamically updates the UI using Fetch API.
---
## 🛠 Tech Stack
**Backend**
- Java 17+
- Spring Boot
- REST Controller
- Service Layer
- DTO Pattern
**Frontend**
- HTML
- CSS
- JavaScript (ES6)
- Fetch API
**Architecture Style**
- Layered architecture (Controller → Service → DTO)
- Separation of concerns
- REST-based communication
---
## 🏗 Architecture
Frontend (JSP + JS)
↓
REST API (/api/roll, /api/roll/custom)
↓
Controller (handles HTTP requests)
↓
Service (business logic & combination evaluation)
↓
DTO (JSON response returned to frontend
---
## 🎮 Game Logic
### Backend Responsibilities
- Generate random dice values
- Count dice occurrences using HashMap
- Determine combinations:
- Five of a kind
- Four of a kind
- Full House
- Three of a kind
- Two Pair
- One Pair
- Nothing
- Return structured JSON response
### Frontend Responsibilities
- Render dice dynamically
- Handle reroll selection using JavaScript Sets
- Communicate with backend via Fetch API
- Update UI state and coin balance
- Determine round winner based on combination ranking
---
## ▶️ How to Run
1. Clone repository:
git clone https://github.com/Tamuna9/poker-dice-game.git
2. Open in IntelliJ IDEA
3. Run:
PokerDiceApplication.java
4. Open browser:
http://localhost:8080
---
## 📂 Key Classes

**PokerDiceController**
Handles REST API endpoints.

**PokerDiceService**
Contains core business logic and combination evaluation

**DiceResult (DTO)**
Transfers dice values and combination results to frontend.
---
## 🧠 What I Practiced in This Project
- REST API design
- Separation of concerns
- Backend–frontend integration
- State management in JavaScript
- Game logic implementation
- Clean and readable code structure
- Basic betting system logic
---
## 🔮 Possible Improvements
- Add database for persistent scores
- Implement AI opponent
- Add animations for dice rolling
- Improve UI/UX styling
- Add unit tests for combination logic
---
## 👩‍💻 Author
Tamuna Gegechkori
Junior Java Full Stack Developer
Artificial Intelligence Student

