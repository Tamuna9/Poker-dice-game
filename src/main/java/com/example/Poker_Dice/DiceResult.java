package com.example.Poker_Dice;

import java.util.List;

// Simple DTO to return dice value and combination
public class DiceResult {
        private final List<Integer> dice;
        private final String combination;

        // Constructor, getters and setters
        public DiceResult(List<Integer> dice, String combination) {
            this.dice = dice;
            this.combination = combination;
        }

        public List<Integer> getDice() {
            return dice;
        }

        public String getCombination() {
            return combination;
        }

}
