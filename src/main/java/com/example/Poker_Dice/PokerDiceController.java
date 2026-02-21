package com.example.Poker_Dice;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api") // Base path for all API endpoints
public class PokerDiceController {

    private final PokerDiceService pokerDiceService;

    // Constructor-based dependency injection for the service
    public PokerDiceController(PokerDiceService gameService) {
        this.pokerDiceService = gameService;
    }

    // Endpoint to roll 5 random  dice
    @GetMapping("/roll")
    public DiceResult rollDice() {
        // Call service to generate dice values and combination
        return pokerDiceService.roll();
    }

    // Endpoint to evaluate custom dice values
    @PostMapping("/roll/custom")
    public DiceResult customRoll(@RequestBody Map<String, List<Integer>> payload) {
        List<Integer> dice = payload.get("dice");

        // Validation: must provide exactly 5 dice
        if (dice == null || dice.size() != 5) {
            throw new IllegalArgumentException("You must provide exactly 5 dice values.");
        }

        // Evaluate the combination  based on the provide dice
        return pokerDiceService.evaluateCustomDice(dice);
    }
}

