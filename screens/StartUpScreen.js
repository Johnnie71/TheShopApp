import React, { useEffect } from 'react';
import { 
    View, 
    ActivityIndicator, 
    StyleSheet 
} from "react-native";
import { AsyncStorageStatic} from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';

const StartupScreen = props => {

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorageStatic.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, userId, expirDate } = transformedData;
            const expirationDate = new Date(expirDate);

            if(expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Auth');
                return;
            }

            props.navigation.navigate('Shop');
        };

        tryLogin();
    }, [])


    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    )
};

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default StartupScreen;