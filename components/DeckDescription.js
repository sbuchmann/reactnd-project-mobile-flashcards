import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const DeckDescription = ({deck}) => {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 35
    },
    subtitle: {
        fontSize: 22,
        color: 'gray',
        textAlign: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    }
});

export default DeckDescription;
