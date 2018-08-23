import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import DeckDescription from './DeckDescription';

const DeckListItem = ({deck, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.item}>
            <DeckDescription deck={deck}/>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'white'
    }
});

export default DeckListItem;
