import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import connect from 'react-redux/es/connect/connect';

import QuizScore from '../components/QuizScore';
import Question from '../components/Question';

import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qTotal: props.deck.questions.length,
            qAnswered: 0,
            qCorrectAnswers: 0,
            qFinished: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            qTotal: nextProps.deck.questions.length,
            qAnswered: 0,
            qCorrectAnswers: 0,
            qFinished: false
        });
    }

    setIncorrect = () => {
        const { qAnswered, qTotal } = this.state;
        const newAnsweredCount = qAnswered + 1;
        const qFinished = newAnsweredCount >= qTotal;

        this.setState({
            qAnswered: newAnsweredCount,
            qFinished
        });

        if (qFinished) {
            clearLocalNotification().then(setLocalNotification);
        }
    };

    setCorrect = () => {
        const { qAnswered, qCorrectAnswers, qTotal } = this.state;
        const newAnsweredCount = qAnswered + 1;
        const qFinished = newAnsweredCount >= qTotal;

        this.setState({
            qAnswered: newAnsweredCount,
            qCorrectAnswers: qCorrectAnswers + 1,
            qFinished
        });

        if (qFinished) {
            clearLocalNotification().then(setLocalNotification);
        }
    };

    navigateToQuiz = () => {
        this.props.navigation.navigate('Quiz', {deckId: this.props.deck.title});
    };

    navigateToIndividual = () => {
        this.props.navigation.navigate('IndividualDeck', {deckId: this.props.deck.title});
    };

    render() {
        const {deck} = this.props;
        const {qAnswered, qTotal, qCorrectAnswers, qFinished} = this.state;

        return (
            <View style={styles.container}>
                {!qFinished && <Question
                    header={`${qAnswered + 1}/${qTotal}`}
                    question={deck.questions[qAnswered]}
                    onCorrect={this.setCorrect}
                    onIncorrect={this.setIncorrect}
                />}
                {qFinished && <QuizScore
                    answered={qAnswered}
                    correctAnswers={qCorrectAnswers}
                    onBack={this.navigateToIndividual}
                    onRestart={this.navigateToQuiz}
                />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'stretch'
    }
});

const mapDispatchToProps = () => ({});

const mapStateToProps = (state, {navigation}) => {
    const {deckId} = navigation.state.params;
    return {
        deck: state[deckId],
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Quiz);
