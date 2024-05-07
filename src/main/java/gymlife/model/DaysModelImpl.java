package gymlife.model;

import gymlife.model.api.Counter;
import gymlife.model.api.DaysModel;

/**
 * Implementation of the DaysModel interface.
 */
public class DaysModelImpl extends Counter implements DaysModel {
    /**
     * Constructs a new DaysModelImpl object with the specified number of days.
     *
     * @param numDays the number of days for the model
     */
    public DaysModelImpl(final int numDays) {
        this.setCount(numDays);
    }
    /**
     * Increases the number of days by 1.
     */
    @Override
    public void newDay() {
        this.decrement();
    }
    /**
     * Returns the number of days left.
     *
     * @return the number of days left
     */
    @Override
    public int dayLeft() {
        return this.getCount();
    }
    /**
     * Checks if the days are over.
     *
     * @return true if the days are over, false otherwise
     */
    @Override
    public boolean isDayOver() {
        return this.getCount() == 0;
    }
}