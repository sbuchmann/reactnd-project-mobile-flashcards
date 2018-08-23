import React from 'react';
import {Text, View} from 'react-native';
import StatusBar from './components/StatusBar';
import Navigator from './components/Navigator';
import {setLocalNotification} from './utils/helpers';

import {createStore} from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import {Provider} from 'react-redux';

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={createStore(reducer, middleware)}>
                <View style={{flex: 1}}>
                    <StatusBar/>
                    <Navigator/>
                </View>
            </Provider>
        );
    }
}
