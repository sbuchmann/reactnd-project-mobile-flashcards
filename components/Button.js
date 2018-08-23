import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({onPress, label}) => {
    return (
        <View style={styles.center}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: 'black',
        height: 45,
        width: 250,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    center: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Button;
