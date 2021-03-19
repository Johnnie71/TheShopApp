import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const Input = props => {
    return (
        <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.input}  
                    value={formState.inputValues.title} 
                    onChangeText={textChangeHandler.bind(this, 'title')}
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                />
                {!formState.inputValidities.title && <Text>Please enter a valid title!</Text>}
            </View>
    )
};

const styles = StyleSheet.create({});

export default Input;