package gymlife.controller;

import gymlife.model.CharacterModelImpl;
import gymlife.model.InteractionsManager;
import gymlife.model.MapManagerImpl;
import gymlife.model.PlaneGameModel;
import gymlife.model.ScenariosManager;
import gymlife.model.GameMapImpl;
import gymlife.model.api.GameMap;
import gymlife.model.api.MapManager;
import gymlife.model.statistics.api.SynchronizerModel;
import gymlife.utility.Directions;
import gymlife.utility.Position;
import gymlife.controller.api.Controller;
import gymlife.model.api.CharacterModel;

/**
 * Class responsible for managing Character movements.
 */
public class ControllerImpl implements Controller {
    private final CharacterModel characterModel = new CharacterModelImpl();
    private final MapManager mapManager = new MapManagerImpl(GameMapImpl.HOUSE_MAP);
    private final ScenariosManager scenariosManager = new ScenariosManager();
    private final InteractionsManager interactionsManager = new InteractionsManager(scenariosManager);
    private final SynchronizerModel sync1 = new SynchronizerModel();
    private final SynchronizerModel sync2 = new SynchronizerModel();
    private final PlaneGameModel model = new PlaneGameModel(sync1, sync2);

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
     *         synchronization.
     */
    @Override
    public SynchronizerModel getSync2() {
        return sync2;
    }

    /**
     * Moves the character in the specified direction.
     * 
     * @param dir the direction in which to move the character
     */
    @Override
    public void moveCharacter(final Directions dir) {
        characterModel.move(dir);
    }

    /**
     * Retrieves the current position of the character.
     * 
     * @return the current position of the character
     */
    @Override
    public Position getCharacterPos() {
        return characterModel.getCharacterPos();
    }

    /**
     * Method to directly change the current map to parameter newMap.
     * 
     * @param newMap GameMap to switch the current map to.
     */
    public void goToGym(final GameMap newMap) {
        mapManager.changeMap(newMap);
    }

    /**
     * Method to return the current map, taken from the MapManager.
     * 
     * @return Returns the current {@code GameMap}.
     */
    public GameMap getCurrentMap() {
        return mapManager.getCurrentMap();
    }

    /**
     * Method to execute the action relative to the cell on which the player is
     * standing.
     */
    public void cellInteraction() {
        mapManager.getCurrentMap()
                .getCellAtCoord(characterModel.getCharacterPos())
                .getInteraction()
                .ifPresent((e) -> e.interact(interactionsManager));
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
        model.runMultiplier(money);
    }

    /**
     * Returns the current value of the multiplier.
     * 
     * @return The current value of the multiplier.
     */
    @Override
    public float getMultiplier() {
        return model.getMultiplierShort();
    }

    /**
     * Returns the threshold of the multiplier.
     * 
     * @return The value of the multiplier's threshold.
     */
    @Override
    public float getThreshold() {
        return model.getThreshold();
    }

    /**
     * Stops the multiplier controlled by the controller.
     */
    @Override
    public void controllerStopMultiplier() {
        model.stopMultiplier();
    }

    /**
     * Returns the value of the money.
     * 
     * @return The current value of the money.
     */
    @Override
    public float controllerGetMoney() {
        return model.getMoneyMultiplied();
    }

    /**
     * Returns the value of the new threshold.
     * 
     * @return The new threshold.
     */
    @Override
    public float randomizeNewThreshold() {
        return model.randomizeNewThreshold();
    }
}
