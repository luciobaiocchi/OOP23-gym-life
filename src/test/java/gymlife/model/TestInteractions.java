package gymlife.model;

import gymlife.model.api.MapManager;
import gymlife.model.api.StatsManager;
import gymlife.utility.GameDifficulty;
import gymlife.utility.Position;
import gymlife.utility.ScenariosType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


import static org.junit.jupiter.api.Assertions.assertEquals;

class TestInteractions {

    private ScenariosManager scenariosManager;
    private StatsManager statsManager;
    private InteractionsManager interactionsManager;
    private MapManager mapManager;

    @BeforeEach
    void init() {
        scenariosManager = new ScenariosManager();
        scenariosManager.updateScenarios(ScenariosType.INDOOR_MAP);
        statsManager = new StatsManagerImpl(GameDifficulty.EASY);
        interactionsManager = new InteractionsManager(scenariosManager, statsManager);
        mapManager = new MapManagerImpl(GameMapImpl.HOUSE_MAP);
    }

    @Test
    void testBed() {
        final int expectedDays = 39;
        final Position pos = new Position(1, 2);
        interactOnCell(pos);
        assertEquals(expectedDays, statsManager.getDays());
    }

    @Test
    void testExit() {
        final Position pos = new Position(7, 2);
        interactOnCell(pos);
        assertEquals(ScenariosType.MAIN_MAP, scenariosManager.getActualScenariosType());
    }

    private void interactOnCell(final Position pos) {
        mapManager.getCurrentMap()
                .getCellAtCoord(pos)
                .getInteraction()
                .ifPresent((e) -> e.interact(interactionsManager));
    }
}