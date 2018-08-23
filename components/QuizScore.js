import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Button from './Button';


const QuizScore = ({answered, correctAnswers, onRestart, onBack}) => (
    <View style={styles.center}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {Math.round((correctAnswers / answered) * 100)}% of the Questions were correctly answered!
            </Text>
        </View>
        <View style={styles.buttons}>
            <Button label="Restart Quiz" onPress={onRestart}/>
            <Button label="Back to Deck" onPress={onBack}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    text: {
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 48
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    buttons: {
        paddingBottom: 30
    }
});

export default QuizScore;
