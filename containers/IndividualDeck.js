import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Button from '../components/Button';
import DeckDescription from '../components/DeckDescription';

class IndividualDeck extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.deckId
    });

    navigateToQuiz = () => {
        this.props.navigation.navigate('Quiz', {deckId: this.props.deck.title});
    };

    navigateToAddCard = () => {
        this.props.navigation.navigate('NewQuestion', {deckId: this.props.deck.title});
    };

    render() {
        const {deck} = this.props;
        if (!deck) {
            return <View style={styles.container}/>
        }
        return (
            <View style={styles.container}>
                <View style={styles.center}>
                    <DeckDescription deck={deck}/>
                </View>
                <View style={styles.buttons}>
                    <Button label="Add Card" onPress={this.navigateToAddCard}/>
                    {deck.questions.length > 0 &&  <Button label="Start Quiz" onPress={this.navigateToQuiz}/>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'stretch'
    },
    buttons: {
        paddingBottom: 30
    }
});

const mapDispatchToProps = () => ({});

const mapStateToProps = (state, {navigation}) => {
    const {deckId} = navigation.state.params;

    return {
        deckId,
        deck: state[deckId],
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndividualDeck);
