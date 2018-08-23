import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

import {addDeck} from '../actions';

class NewDeck extends Component {
    state = {
        title: ''
    };

    submit = () => {
        this.props.dispatchAddDesk(this.state.title);

        this.setState({title: ''});

        this.props.navigation.navigate('IndividualDeck', {deckId: this.state.title});
    };

    render() {
        const {title} = this.state;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>
                    What is the title of your new deck?
                </Text>
                <Input
                    onChangeText={(updated) => this.setState({title: updated})}
                    placeholder="Deck Title"
                    value={title}
                />
                {title.length > 0 && <Button onPress={this.submit} label="Submit"/>}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 48
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'stretch'
    }
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddDesk: (title) => dispatch(addDeck(title))
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
