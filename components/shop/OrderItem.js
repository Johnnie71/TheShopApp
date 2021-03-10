import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CartItem from './CartItem';

const OrderItem = props => {
    return (
        <View>
            <View>
                <Text>$TOTAL</Text>
                <Text>DATE</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});


export default OrderItem;