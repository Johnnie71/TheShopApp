import React from 'react';
import { ScrollView, View, Button, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const AuthScreen = props => {
    return (
        <KeyboardAvoidingView 
            behavior='padding' 
            keyboardVerticalOffset={50} 
            style={styles.screen}
        >
            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input 
                        id='email' 
                        label='E-Mail' 
                        keyboardType='email-address' 
                        required
                        email
                        autoCapitalize='none'
                        errorMessage='Please enter a valid email address.'
                        onValueChange={() => {}}
                        initialValue=''
                    />
                    <Input 
                        id='password' 
                        label='Password' 
                        keyboardType='default' 
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize='none'
                        errorMessage='Please enter a valid password.'
                        onValueChange={() => {}}
                        initialValue=''
                    />
                    <View>
                        <Button 
                            title='Login' 
                            color={Colors.primary} 
                            onPress={() => {}}
                        />
                        <Button 
                            title='Switch to sign up' 
                            color={Colors.accent} 
                            onPress={() => {}}
                        />
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    screen: {

    },
    authContainer: {
        
    }
});

export default AuthScreen;