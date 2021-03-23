import React, { useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (state, action) => {};


const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initiallyValid,
        touched: false
    });

    const textChangeHandler = text => {
        dispatch({type: INPUT_CHANGE})
    };

    return (
        <View style={styles.formControl}>
                <Text style={styles.label}>{props.label}</Text>
                <TextInput 
                    {...props}
                    style={styles.input}  
                    value={formState.inputValues.title} 
                    onChangeText={textChangeHandler}
                />
                {!formState.inputValidities.title && <Text>{props.errorText}</Text>}
            </View>
    )
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});

export default Input;