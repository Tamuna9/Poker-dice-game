package com.example.Poker_Dice;

import org.springframework.stereotype.Service;
import java.util.*;

@Service // Marks this as a Spring service component
public class PokerDiceService {

    private final Random random = new Random();

    // Roll 5 random dice
    public DiceResult roll() {
        List<Integer> dice = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            dice.add(random.nextInt(6) + 1);
        }
        String combination = determineCombination(dice);
        return new DiceResult(dice, combination);
    }

    // Evaluate a custom set of dice
    public DiceResult evaluateCustomDice(List<Integer> dice) {
        String combination = determineCombination(dice);
        return new DiceResult(dice, combination);
    }

    // Determine poker dice combination
    private String determineCombination(List<Integer> dice) {
        // Count occurrences of each die value
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int die : dice) {
            countMap.put(die, countMap.getOrDefault(die, 0) + 1);
        }

        Collection<Integer> counts = countMap.values();
        boolean isThree = counts.contains(3);
        boolean isTwo = counts.contains(2);
        boolean isFour = counts.contains(4);
        boolean isFive = counts.contains(5);

        // Count how many pairs exist
        long pairs = counts.stream().filter(v -> v == 2).count();

        // Determine the combination
        if (isFive) return "Five of a kind";
        if (isFour) return "Four of a kind";
        if (isThree && isTwo) return "Full House";
        if (isThree) return "Three of a kind";
        if (pairs == 2) return "Two Pair";
        if (pairs == 1) return "One Pair";

        return "Nothing"; // no combination
    }
}
