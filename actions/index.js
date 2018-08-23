import * as api from '../utils/api';
export const RECEIVED_DECKS = 'RECEIVED_DECKS';
export const ADDED_DECK = 'ADDED_DECK';
export const UPDATED_DECK = 'UPDATED_DECK';

const updatedDeck = (deck) => {
    return {
        type: UPDATED_DECK,
        payload: deck
    }
};

const addedDeck = (deck) => {
    return {
        type: ADDED_DECK,
        payload: deck
    }
};

const receivedDecks = decks => {
    return {
        type: RECEIVED_DECKS,
        payload: decks
    }
};

export const receiveDecks = () => dispatch => {
    api.fetchDecks()
        .then(decks => dispatch(receivedDecks(decks)));
};

export const addQuestion = (deckId, question, answer) => (dispatch, getState) => {
    const deck = {
        ...getState()[deckId],
        questions: [
            ...getState()[deckId].questions,
            {
                question,
                answer
            }
        ]
    };

    dispatch(updatedDeck({
        [deckId]: deck
    }));

    api.submitDesk(deck);
};

export const addDeck = title => dispatch => {
    const deck = {
        title,
        questions: []
    };

    dispatch(addedDeck({
        [title]: deck
    }));

    api.submitDesk(deck);
};
