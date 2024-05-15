package gymlife.model.minigame;

import gymlife.utility.minigame.MinigameDifficulty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The ScoringTable class represents the scoring table of a minigame.
 * It shows the scores of the players in the minigame, and updates the scores when a player finishes the minigame.
 * It keeps track of the top 5 scores of the players in all the three difficulties.
 */
public class ScoringTable {
    private final Map<MinigameDifficulty, List<Integer>> scores;

    /**
     * Constructs a new ScoringTable object.
     * Initializes the scores map with the three difficulties and sets the scores to null.
     */
    public ScoringTable() {
        scores = new HashMap<>();
        for (MinigameDifficulty difficulty : MinigameDifficulty.values()) {
            scores.put(difficulty, null);
        }
    }

    /**
     * Updates the score of the player in the scoring table.
     * Adds the score to the list of scores of the given difficulty.
     * If the list of scores is greater than 5, removes the minimum score from the list.
     *
     * @param difficulty the difficulty of the minigame that has been played
     * @param score      the score of the player
     */
    public void updateScore(final MinigameDifficulty difficulty, final int score) {
        scores.get(difficulty).add(score);
        if (scores.get(difficulty).size() > 5) {
            scores.get(difficulty).remove(findMinimun(difficulty));
        }
    }

    /**
     * Finds the minimum score in the list of scores of the given difficulty.
     *
     * @param difficulty the difficulty of the minigame
     * @return the minimum score in the list of scores
     */
    public int findMinimun(final MinigameDifficulty difficulty) {
        int min = scores.get(difficulty).get(0);
        for (int numero : scores.get(difficulty)) {
            if (numero < min) {
                min = numero;
            }
        }
        return min;
    }

    /**
     * Returns the score of the player at the given index in the list of scores of the given difficulty.
     *
     * @param index the index of the player in the list of scores
     * @return the score of the player at the given index
     */
    public String toString(final int index) {
        //return String.format("%3d:%02d", scores.get(index) / 60, scores.get(index) % 60);
        return null;
    }

    /**
     * Returns the size of the list of scores of the given difficulty.
     *
     * @param difficulty the difficulty of the minigame
     * @return the size of the list of scores
     */
    public int getSize(final MinigameDifficulty difficulty) {
        return scores.get(difficulty).size();
    }
}
