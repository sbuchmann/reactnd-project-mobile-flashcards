import {AsyncStorage} from 'react-native';
const STORAGE_KEY = 'ReactNdNative:mobileFlashcards';

const parseStorageData = (decks) => {
    return decks === null
        ? {}
        : JSON.parse(decks)
};

export const submitDesk = desk => {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [desk.title]: desk
    }));
};

export const fetchDecks = () => {
    return AsyncStorage
        .getItem(STORAGE_KEY)
        .then(parseStorageData);
};
