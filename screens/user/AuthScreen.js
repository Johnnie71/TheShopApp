import React, { useState } from 'react';
import { 
    ScrollView, 
    View, 
    Button, 
    KeyboardAvoidingView, 
    StyleSheet 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const AuthScreen = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const signupHandler = () => {
        dispatch(authActions.signup())
    };

    const emailHandler = () => {

    }

    return (
        <KeyboardAvoidingView 
            behavior='padding' 
            keyboardVerticalOffset={50} 
            style={styles.screen}
        >
            <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient} >
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
                            onInputChange={() => {}}
                            initialValue=""
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
                            onInputChange={() => {}}
                            initialValue=''
                        />
                        <View style={styles.buttonContainer}>
                            <Button 
                                title='Login' 
                                color={Colors.primary} 
                                onPress={() => {}}
                            />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title='Switch to sign up' 
                                color={Colors.accent} 
                                onPress={() => {}}
                            />
                        </View>
                    </ScrollView>
                </Card>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
};

AuthScreen.navigationOptions = {
    headerTitle: 'Authenticate'
}



const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default AuthScreen;