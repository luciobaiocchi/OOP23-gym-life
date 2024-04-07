package gymlife.view.bankgame;

/**
 * This class sets the serial version UID and calls the constructor of the
 * superclass.
 */
public class SkyGameView extends BankGameComponentImpl {
    private static final long serialVersionUID = 495323337747115744L;

    /**
     * This costructor calls the constructor's superclass and puts the path as the
     * constructor's father's class argument.
     */
    public SkyGameView() {
        super("gymlife/sky/sky.png");
    }
}
