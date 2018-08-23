import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native'
import connect from 'react-redux/es/connect/connect';

import Input from '../components/Input';
import Button from '../components/Button';
import {addQuestion} from '../actions';

class NewQuestion extends Component {
    state = {
        question: '',
        answer: ''
    };

    submit = () => {
        const {dispatchQuestion, navigation} = this.props;
        dispatchQuestion(this.state);

        this.setState({
            question: '',
            answer: ''
        });

        navigation.navigate('IndividualDeck', {deckId: navigation.state.params.deckId});
    };

    render() {
        const {question, answer} = this.state;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Input
                    onChangeText={(updated) => this.setState({question: updated})}
                    placeholder="Your Question"
                    value={question}
                />
                <Input
                    onChangeText={(updatedAnswer) => this.setState({answer: updatedAnswer})}
                    placeholder="Your Answer"
                    value={answer}
                />
                {question.length > 0 && answer.length > 0 && <Button onPress={this.submit} label="Submit"/>}
            </KeyboardAvoidingView>
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

const mapDispatchToProps = (dispatch, {navigation}) => ({
    dispatchQuestion: ({question, answer}) => dispatch(addQuestion(navigation.state.params.deckId, question, answer))
});

const mapStateToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewQuestion);
