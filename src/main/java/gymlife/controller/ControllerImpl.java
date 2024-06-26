package gymlife.controller;

import gymlife.controller.api.Controller;

import gymlife.model.map.GameMapImpl;
import gymlife.model.map.MapManagerImpl;
import gymlife.model.map.InteractionsManagerImpl;
import gymlife.model.map.ScenariosManagerImpl;
import gymlife.model.inventory.FoodType;
import gymlife.model.inventory.InventoryImpl;
import gymlife.model.inventory.api.Inventory;
import gymlife.model.encounter.Encounter;
import gymlife.model.minigame.api.MinigameManager;
import gymlife.model.map.api.InteractionsManager;
import gymlife.model.map.api.ScenariosManager;
import gymlife.model.minigame.MinigameManagerImpl;
import gymlife.model.statistics.LimitedGameCounterImpl;
import gymlife.model.statistics.StatsConstants;
import gymlife.model.bankgame.PlaneGameModelImpl;
import gymlife.model.statistics.StatsManagerImpl;
import gymlife.model.bankgame.SynchronizerModel;

import gymlife.model.character.CharacterImpl;
import gymlife.model.statistics.StatsType;
import gymlife.model.map.api.GameMap;
import gymlife.model.map.api.MapManager;
import gymlife.model.statistics.api.StatsManager;
import gymlife.model.character.api.Character;

import gymlife.model.statistics.GameDifficulty;
import gymlife.utility.Direction;
import gymlife.utility.Position;
import gymlife.utility.ScenariosType;
import gymlife.utility.minigame.MinigameDifficulty;
import gymlife.utility.minigame.MinigameState;
import gymlife.utility.minigame.MinigameType;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * This class implements the Controller interface and is responsible for managing Character movements.
 * It handles the character's movements, interactions with the game map, and game statistics.
 */
public class ControllerImpl implements Controller {
    private final Character character = new CharacterImpl();
    private final MapManager mapManager = new MapManagerImpl(GameMapImpl.HOUSE_MAP);
    private final ScenariosManager scenariosManager;
    private final StatsManager statsManager;
    private final InteractionsManager interactionsManager;
    private final SynchronizerModel sync1 = new SynchronizerModel();
    private final SynchronizerModel sync2 = new SynchronizerModel();
    private final PlaneGameModelImpl planeGameModel = new PlaneGameModelImpl(sync1, sync2);
    private final MinigameManager minigameManager;
    private final Inventory inventory = new InventoryImpl();
    private Encounter currentEncounter;
    private static final int MONEY_START = 50;

    /**
     * Constructs a new ControllerImpl object with the specified game difficulty.
     *
     * @param difficulty the difficulty of the game.
     */
    public ControllerImpl(final GameDifficulty difficulty) {
        this.statsManager = new StatsManagerImpl(difficulty);
        statsManager.setStat(StatsType.STAMINA, StatsConstants.MAX_STATS_LEVEL);
        statsManager.setStat(StatsType.HAPPINESS, StatsConstants.MAX_STATS_LEVEL / 2);
        statsManager.multiIncrementStat(StatsType.MONEY, MONEY_START);
        this.scenariosManager = new ScenariosManagerImpl();
        this.minigameManager = new MinigameManagerImpl();
        this.currentEncounter = null;
        this.interactionsManager = new InteractionsManagerImpl(
                scenariosManager,
                statsManager,
                minigameManager,
                inventory
        );
        statsManager.setStat(StatsType.MONEY, StatsConstants.MAX_STATS_LEVEL);

    }

    /**
     * Gets the first synchronization object used to coordinate threads.
     *
     * @return the first SynchronizerModel instance used for thread synchronization.
     */
    @Override
    public SynchronizerModel getSync1() {
        return sync1;
    }

    /**
     * Gets the second synchronization object used to coordinate threads.
     *
     * @return the second SynchronizerModel instance used for thread
     * synchronization.
     */
    @Override
    public SynchronizerModel getSync2() {
        return sync2;
    }

    /**
     * This method starts the multiplier thread, continuously updates the view with
     * the current multiplier value,
     * and waits for the thread to finish.
     *
     * @param money the money value with which to start the multiplier.
     */
    @Override
    public void startMultiplier(final float money) {
        planeGameModel.runMultiplier(money);
    }

    /**
     * Retrieves the count of a specific type of food from the inventory.
     * This method returns the number of items for a given `FoodType` from the inventory.
     *
     * @param foodType the type of food whose count is to be retrieved.
     * @return the count of the specified food type.
     */
    @Override
    public int getFoodCount(final FoodType foodType) {
        return inventory.getFoodCount().get(foodType);
    }

    /**
     * Method to get what food is about to be bought.
     *
     * @return the food to be bought.
     */
    @Override
    public FoodType getFoodToBuy() {
        return inventory.getCurrentFoodToBuy();
    }

    /**
     * Method that adds the food to the inventory and also reduces money by the cost of the food.
     */
    @Override
    public void buyFood() {
        final FoodType food = inventory.getCurrentFoodToBuy();
        statsManager.multiIncrementStat(StatsType.MONEY, -(int) food.getCost());
        inventory.addFood(food);
    }

    /**
     * Returns the current value of the multiplier.
     *
     * @return The current value of the multiplier.
     */
    @Override
    public float getMultiplier() {
        return planeGameModel.getMultiplierShort();
    }

    /**
     * Returns the threshold of the multiplier.
     *
     * @return The value of the multiplier's threshold.
     */
    @Override
    public float getThreshold() {
        return planeGameModel.getThreshold();
    }

    /**
     * Stops the multiplier controlled by the controller.
     */
    @Override
    public void controllerStopMultiplier() {
        planeGameModel.stopMultiplier();
    }

    /**
     * Returns the value of the money.
     *
     * @return The current value of the money.
     */
    @Override
    public float controllerGetMoney() {
        return planeGameModel.getMoneyMultiplied();
    }

    /**
     * Moves the character in the specified direction.
     *
     * @param dir the direction in which to move the character
     */
    @Override
    public void moveCharacter(final Direction dir) {
        final Position positionToGo = new Position(
                getCharacterPos().X() + dir.getOffSet().X(),
                getCharacterPos().Y() + dir.getOffSet().Y());
        if (mapManager.getCurrentMap().checkBorders(positionToGo)
                && !mapManager.getCurrentMap().isCellCollidable(positionToGo)) {
            character.move(dir);
        }
    }

    /**
     * Retrieves the current position of the character.
     *
     * @return the current position of the character
     */
    @Override
    public Position getCharacterPos() {
        return character.getCharacterPos();
    }

    /**
     * Retrieves the current game statistics.
     *
     * @return a Map of the current game statistics
     */
    @Override
    public Map<StatsType, LimitedGameCounterImpl> getStatistics() {
        return statsManager.getCommonStats();
    }

    /**
     * Returns the current amount of money.
     * <p>
     * This method retrieves the money count from the `statsManager` and returns it.
     *
     * @return money.
     */
    @Override
    public int returnMoney() {
        return statsManager.getMoney();
    }

    /**
     * Generates a new random threshold value within a specified range and resets
     * the multiplier.
     */
    @Override
    public void newThreshold() {
        planeGameModel.randomizeNewThreshold();
    }


    /**
     * Returns the number of days that have passed in the game.
     *
     * @return the number of days
     */
    @Override
    public int getDays() {
        return statsManager.getDays();
    }

    /**
     * Returns the money of the player.
     *
     * @return the number of days
     */
    @Override
    public int getMoney() {
        return statsManager.getMoney();
    }

    /**
     * Changes the current game map to the specified new map.
     *
     * @param newMap the new map to switch to
     */
    @Override
    public void goToNewMap(final GameMap newMap) {
        final Optional<Encounter> encounter = mapManager.changeMap(newMap);
        if (encounter.isPresent()) {
            currentEncounter = encounter.get();
            changeScenario(ScenariosType.ENCOUNTER);
        } else {
            changeScenario(ScenariosType.INDOOR_MAP);
        }
    }

    /**
     * Retrieves the current game map.
     *
     * @return the current game map
     */
    @Override
    public GameMap getCurrentMap() {
        return mapManager.getCurrentMap();
    }

    /**
     * Executes the action associated with the cell on which the character is currently standing.
     */
    @Override
    public void cellInteraction() {
        mapManager.getCurrentMap()
                .getCellAtCoord(character.getCharacterPos())
                .getInteraction()
                .ifPresent((e) -> e.interact(interactionsManager));
    }

    /**
     * Retrieves the level of mass of the character.
     *
     * @return an int representing the level of mass from 1 to 4
     */
    @Override
    public int getPlayerLevel() {
        final int div = 75;
        return statsManager.getCommonStats().get(StatsType.MASS).getCount() < StatsConstants.MAX_MASS_LEVEL
                ? statsManager.getCommonStats().get(StatsType.MASS).getCount() / div + 1 : 4;
    }

    /**
     * Retrieves the current scenario type.
     *
     * @return the current scenario.
     */
    @Override
    public ScenariosType getActualScenario() {
        return scenariosManager.getActualScenariosType();
    }

    /**
     * Method to change the scenario.
     *
     * @param newScenario The ScenariosType to change the current one to.
     */
    @Override
    public void changeScenario(final ScenariosType newScenario) {
        scenariosManager.updateScenarios(newScenario);
    }

    /**
     * Method to return the character to the current map's default position.
     */
    @Override
    public void resetPlayerPosition() {
        character.setPosition(mapManager.getCurrentMap().getDefaultPosition());
    }

    /**
     * Method that returns the current Encounter.
     *
     * @return the encounter object.
     */
    @Override
    public Encounter getCurrentEncounter() {
        return currentEncounter;
    }

    /**
     * Method to either accept or decline the encounter. Changes to INDOOR scenario after.
     *
     * @param choice boolean indicating whether to accept or decline the encounter.
     */
    @Override
    public void resolveEncounter(final boolean choice) {
        if (choice) {
            statsManager.acceptEncounter(currentEncounter);
        } else {
            statsManager.denyEncounter(currentEncounter);
        }
        changeScenario(ScenariosType.INDOOR_MAP);
    }

    /**
     * Sets the difficulty level of the current minigame,
     * and starts it.
     *
     * @param difficulty the difficulty level to set
     */
    @Override
    public void setMinigameDifficulty(final MinigameDifficulty difficulty) {
        minigameManager.setMinigameDifficulty(difficulty);
    }

    /**
     * Notifies the current minigame that the player has done something.
     *
     * @param button the button pressed by the player
     */
    @Override
    public void notifyUserAction(final String button) {
        minigameManager.notifyUserAction(button);
    }

    /**
     * Retrieves the sequence of the current minigame.
     *
     * @return the sequence of the current minigame
     */
    @Override
    public List<String> getSequence() {
        return minigameManager.getSequence();
    }

    /**
     * Retrieves the type of the current minigame.
     * Retrieves the current game statistics.
     *
     * @return the type of the current minigame
     */
    @Override
    public MinigameType getMinigameType() {
        return minigameManager.getMinigameType();
    }

    /**
     * Set the current minigame score.
     * Updates the game statistics.
     * Updates the scenarios.
     */
    @Override
    public void setMinigameResult() {
        final int winExperience = 10;
        minigameManager.updateMinigameResult();
        statsManager.multiIncrementStat(minigameManager.getMinigameType().getStatsType(),
                minigameManager.getMinigameState() == MinigameState.ENDED_WON
                        ? minigameManager.getDifficulty().getExperienceGained() : -winExperience);
        statsManager.multiIncrementStat(StatsType.STAMINA, StatsConstants.GYM_STAMINA_CONSUMPTION);
        scenariosManager.updateScenarios(ScenariosType.MINIGAME_GYM);
    }

    /**
     * Return the minigame status.
     *
     * @return an enum representing the minigame status
     */
    @Override
    public MinigameState getMinigameState() {
        return minigameManager.getMinigameState();
    }

    /**
     * Retrieves the current minigame difficulty.
     *
     * @return the current minigame difficulty
     */
    @Override
    public MinigameDifficulty getDifficulty() {
        return minigameManager.getDifficulty();
    }


    /**
     * Retrieves the current minigame score.
     *
     * @param minigameType the type of the minigame
     * @param difficulty   the difficulty of the minigame
     * @return the current minigame score
     */
    @Override
    public List<Integer> getScores(final MinigameType minigameType, final MinigameDifficulty difficulty) {
        return minigameManager.getMinigameScore(minigameType, difficulty);
    }


    /**
     * Method to check if the player has won the game.
     *
     * @return Returns true if the player has won, false otherwise.
     */
    @Override
    public boolean isWin() {
        return statsManager.checkWin();
    }

    /**
     * Method to check if the game is over.
     *
     * @return true if the game is over, false otherwise
     */
    @Override
    public boolean isGameOver() {
        return statsManager.isGameOver();
    }

    /**
     * Updates the money value in the statistics manager by incrementing it with the specified value.
     *
     * @param value the amount to increment the money value by. This value can be positive or negative.
     */
    @Override
    public void changeMoney(final int value) {
        statsManager.multiIncrementStat(StatsType.MONEY, value);
    }

    /**
     * Returns the list of thresholds from the plane game model.
     *
     * @return A list containing the thresholds from the plane game model.
     */
    @Override
    public List<Float> returnList() {
        return planeGameModel.getList();
    }

}
