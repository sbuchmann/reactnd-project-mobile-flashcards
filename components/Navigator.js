import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Constants} from 'expo';

import Quiz from '../containers/Quiz';
import NewQuestion from '../containers/NewQuestion';
import IndividualDeck from '../containers/IndividualDeck';
import AppTabs from './AppTabs';


const Navigator = createStackNavigator({
    Home: {
        screen: AppTabs,
        navigationOptions: {
            header: null
        }
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Card'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz'
        }
    },
    IndividualDeck: {screen: IndividualDeck}
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            marginTop: -Constants.statusBarHeight,
            backgroundColor: 'black'
        }
    }
});

export default Navigator;
