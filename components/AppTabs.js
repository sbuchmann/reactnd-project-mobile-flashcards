import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import NewDeck from '../containers/NewDeck';
import DeckList from '../containers/DeckList';

const AppTabs = createMaterialTopTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks'
        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        },
    }
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white',
            height: 56,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 1,
            shadowRadius: 6
        }
    }
});

export default AppTabs;
