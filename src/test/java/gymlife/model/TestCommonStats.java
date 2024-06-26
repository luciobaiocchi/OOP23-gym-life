package gymlife.model;

import gymlife.model.statistics.CommonStatsImpl;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


import gymlife.model.statistics.api.CommonStats;
import gymlife.model.statistics.StatsConstants;
import gymlife.model.statistics.StatsType;

/**
 * This class contains unit tests for the StatsModel implementation.
 */
class TestCommonStats {

    @Test
    void testInitialization() {
        final CommonStats stats = new CommonStatsImpl();
        stats.resetAll();
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.HAPPINESS));
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.STAMINA));
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.LEG_MASS));
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.BACK_MASS));
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(StatsConstants.STARTING_MASS_LEVEL, stats.getStats(StatsType.MASS));
        stats.increase(StatsType.MASS);
        assertEquals(StatsConstants.STARTING_MASS_LEVEL * 2, stats.getStats(StatsType.MASS));
        stats.decrease(StatsType.MASS);
        assertEquals(3, stats.getStats(StatsType.MASS));
        stats.resetAll();
    }

    @Test
    void testIncrementDecrement() {
        final CommonStats stats = new CommonStatsImpl();
        stats.resetAll();
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.STAMINA));
        stats.increase(StatsType.STAMINA);


        assertEquals(3, stats.getStats(StatsType.MASS));
        assertEquals(1, stats.getStats(StatsType.LEG_MASS));
        assertEquals(1, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(1, stats.getStats(StatsType.BACK_MASS));

        stats.increase(StatsType.MASS);
        assertEquals(StatsConstants.STARTING_MASS_LEVEL * 2, stats.getStats(StatsType.MASS));
        assertEquals(2, stats.getStats(StatsType.LEG_MASS));
        assertEquals(2, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(2, stats.getStats(StatsType.BACK_MASS));

        stats.decrease(StatsType.MASS);
        assertEquals(3, stats.getStats(StatsType.MASS));
        assertEquals(1, stats.getStats(StatsType.LEG_MASS));
        assertEquals(1, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(1, stats.getStats(StatsType.BACK_MASS));
        stats.decrease(StatsType.MASS);
        assertEquals(0, stats.getStats(StatsType.MASS));
        assertEquals(0, stats.getStats(StatsType.LEG_MASS));
        assertEquals(0, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(0, stats.getStats(StatsType.BACK_MASS));

        stats.decrease(StatsType.MASS);
        assertEquals(0, stats.getStats(StatsType.MASS));
        assertEquals(0, stats.getStats(StatsType.LEG_MASS));
        assertEquals(0, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(0, stats.getStats(StatsType.BACK_MASS));
        stats.increase(StatsType.LEG_MASS);
        assertEquals(1, stats.getStats(StatsType.MASS));
        assertEquals(1, stats.getStats(StatsType.LEG_MASS));
        assertEquals(0, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(0, stats.getStats(StatsType.BACK_MASS));
        stats.increase(StatsType.CHEST_MASS);
        assertEquals(2, stats.getStats(StatsType.MASS));
        assertEquals(1, stats.getStats(StatsType.LEG_MASS));
        assertEquals(1, stats.getStats(StatsType.CHEST_MASS));
        assertEquals(0, stats.getStats(StatsType.BACK_MASS));
        stats.increase(StatsType.LEG_MASS);
        assertEquals(3, stats.getStats(StatsType.MASS));
        assertEquals(2, stats.getStats(StatsType.LEG_MASS));
        stats.resetAll();
    }

    @Test
    void testMultiIncrement() {
        final CommonStats stats = new CommonStatsImpl();
        stats.resetAll();
        stats.multiIncrementStats(StatsType.BACK_MASS, TestConstants.TEST_MULTI_INCREMENT_POSITIVE_5);
        assertEquals(StatsConstants.STARTING_STATS_LEVEL + TestConstants.TEST_MULTI_INCREMENT_POSITIVE_5,
                stats.getStats(StatsType.BACK_MASS));
        stats.multiIncrementStats(StatsType.BACK_MASS, -TestConstants.TEST_MULTI_INCREMENT_POSITIVE_5);
        assertEquals(StatsConstants.STARTING_STATS_LEVEL, stats.getStats(StatsType.BACK_MASS));
        stats.resetAll();
    }

    @Test
    void testResetCount() {
        final CommonStats stats = new CommonStatsImpl();
        stats.resetAll();
        assertEquals(StatsConstants.STARTING_MASS_LEVEL, stats.getStats(StatsType.MASS));
    }


}
