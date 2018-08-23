import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';

import DeckListItem from '../components/DeckListItem';
import {receiveDecks} from "../actions";

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatchReceiveDecks();
    }

    renderItemObj = ({item}) => {
        const {navigation} = this.props;

        return (
            <DeckListItem
                deck={item}
                onPress={() => navigation.navigate('IndividualDeck', {deckId: item.title})}
            />
        );
    };

    keyExtractorTitle = (item) => item.title;

    render() {
        const {decks} = this.props;
        return (
            <View>
                <FlatList
                    data={decks}
                    keyExtractor={this.keyExtractorTitle}
                    renderItem={this.renderItemObj}
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchReceiveDecks: () => dispatch(receiveDecks())
});

const mapStateToProps = state => ({
    decks: Object.values(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
