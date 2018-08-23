import React from 'react';

import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const TextButton = ({children, onPress, style = {}}) => (
    <View style={styles.center}>
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.textButton, style]}>{children}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    textButton: {
        color: 'red',
        textAlign: 'center'
    },
    center: {
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'
    }
});

export default TextButton;
