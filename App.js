import React from 'react';
import {Text, View} from 'react-native';
import MyStatusBar from './components/MyStatusBar';
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
                    <MyStatusBar/>
                    <Navigator/>
                </View>
            </Provider>
        );
    }
}
