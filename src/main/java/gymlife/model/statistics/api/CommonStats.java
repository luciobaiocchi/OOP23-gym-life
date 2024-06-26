package gymlife.model.statistics.api;

import java.util.Map;

import gymlife.model.statistics.LimitedGameCounterImpl;
import gymlife.model.statistics.StatsType;

/**
 * This interface represents a container of all LimitedStats of the game.
 * It provides methods to retrieve and update various stats related to the player.
 */
public interface CommonStats {
    /**
     * Increases the specified stat by 1.
     * 
     * @param stats the type of stat to increase
     */
    void increase(StatsType stats);
    /**
     * Decreases the specified stat by 1.
     * 
     * @param stats the type of stat to decrease
     */
    void decrease(StatsType stats);
    /**
     * Retrieves the value of the specified stat.
     * 
     * @param stats the type of stat to retrieve
     * @return the value of the specified stat
     */
    int getStats(StatsType stats);
    /**
     * Retrieves the map of stats and their corresponding values.
     * 
     * @return the map of stats and their corresponding values
     */
    Map<StatsType, LimitedGameCounterImpl> getMap();
    /**
     * Increases or decrease the specified stat by the given value.
     * 
     * @param stats the type of stat to increase
     * @param value the value to increase the stat by
     */
    void multiIncrementStats(StatsType stats, int value);
    /**
     * Reset all stats to 0.
     */
    void resetAll();
    /**
     * Set stats to value.
     * @param stats the type of stat to set
     * @param value the value to set the stat to
     */
    void setStats(StatsType stats, int value);

}
