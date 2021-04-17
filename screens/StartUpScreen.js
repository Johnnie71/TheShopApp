import React from 'react';
import { 
    View, 
    ActivityIndicator, 
    StyleSheet 
} from "react-native";
import { AsyncStorageStatic} from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';

const StartupScreen = props => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default StartupScreen;