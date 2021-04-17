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
            const { token, userId, expirDate } = transformedData
            const transformedData = JSON.parse(userData);
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