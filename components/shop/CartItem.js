import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
    return (
        <View>
            <Text>
                <Text>QTY</Text><Text>TITLE</Text>
            </Text>
            <View>
                <Text>$AMT</Text>
                <TouchableOpacity onPress={}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                    size={23} 
                    color="red"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CartItem;