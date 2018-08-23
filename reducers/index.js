import {RECEIVED_DECKS, ADDED_DECK, UPDATED_DECK} from '../actions';


export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVED_DECKS:
            return {
                ...state,
                ...action.payload
            };
        case UPDATED_DECK:
        case ADDED_DECK:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
