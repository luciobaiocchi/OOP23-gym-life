package gymlife.model;

import gymlife.model.character.CharacterModelImpl;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import gymlife.model.character.api.CharacterModel;
import gymlife.utility.Position;
import gymlife.utility.Directions;
import gymlife.utility.Constants;

import java.util.Locale;

/**
 * This class contains unit tests for the CharacterModel class.
 */
class TestCharacter {
    /**
     * Test case to verify the initial position of the character.
     */
    @Test
    void testInitialPos() {
        final CharacterModel character = new CharacterModelImpl();
        assertEquals(Constants.CHARACTER_START_POS, character.getCharacterPos());
    }
    /**
     * Test case to verify the movement of the character in different directions.
     */
    @Test
    void testMove() {
        final CharacterModel character = new CharacterModelImpl();
        Position pos = Constants.CHARACTER_START_POS;

        character.move(Directions.UP);
        assertEquals("up", Directions.UP.toString().toLowerCase(Locale.ROOT));
        pos = new Position(pos.X(), pos.Y() - Constants.MOVEMENT);
        assertEquals(pos, character.getCharacterPos());

        character.move(Directions.DOWN);
        pos = new Position(pos.X(), pos.Y() + Constants.MOVEMENT);
        assertEquals(pos, character.getCharacterPos());

        character.move(Directions.LEFT);
        pos = new Position(pos.X() - Constants.MOVEMENT, pos.Y());
        assertEquals(pos, character.getCharacterPos());

        character.move(Directions.RIGHT);
        pos = new Position(pos.X()  + Constants.MOVEMENT, pos.Y());
        assertEquals(pos, character.getCharacterPos());
    }

    /**
     * Test Character setting position.
     */
    @Test
    void testSetPos() {
        final CharacterModel character = new CharacterModelImpl();
        final Position position = new Position(2, 3);
        assertEquals(Constants.CHARACTER_START_POS, character.getCharacterPos());
        character.setPosition(position);
        assertEquals(character.getCharacterPos(), position);
    }
}
