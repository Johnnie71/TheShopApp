import React from 'react';
import { ScrollView, Text, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';

const AuthScreen = props => {
    return (
        <View style={styles.screen}>
            <Card style={styles.authContainer}>
                <ScrollView>

                </ScrollView>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default AuthScreen;