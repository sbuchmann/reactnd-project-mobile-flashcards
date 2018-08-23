import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from './Button';
import TextButton from './TextButton';

class Question extends Component {
    state = {
        showAnswer: false
    };

    componentWillReceiveProps() {
        this.setState({showAnswer: false});
    }

    render() {
        const {header, question, onCorrect, onIncorrect} = this.props;

        const {showAnswer} = this.state;

        if (!question) {
            return <View style={styles.container}/>;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{header}</Text>
                <View style={styles.container}>
                    <Text style={styles.questionAnswer}>
                        {showAnswer ? question.answer : question.question}
                    </Text>
                    <TextButton onPress={() => this.setState({showAnswer: !showAnswer})}>
                        {showAnswer ? 'Question' : 'Answer'}
                    </TextButton>
                </View>
                <View style={styles.buttons}>
                    <Button label="Correct" onPress={onCorrect}/>
                    <Button label="Incorrect" onPress={onIncorrect}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    header: {
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'left',
        fontSize: 14
    },
    questionAnswer: {
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 48
    },
    buttons: {
        paddingBottom: 30
    }
});

export default Question;
