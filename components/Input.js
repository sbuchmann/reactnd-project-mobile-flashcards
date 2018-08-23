import React from 'react';

import {StyleSheet, TextInput} from 'react-native'

const Input = ({value, onChangeText, placeholder}) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        padding: 5
    }
});

export default Input;
