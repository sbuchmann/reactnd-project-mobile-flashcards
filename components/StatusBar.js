import React from 'react';
import {Constants} from 'expo';
import {View, StatusBar} from 'react-native';

const StatusBar = (props) => {
    return (
        <View style={{backgroundColor: 'black', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='white' {...props} />
        </View>
    )
};

export default StatusBar;
