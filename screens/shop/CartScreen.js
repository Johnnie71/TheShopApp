import React from 'react';
import { View, Text, StyleSheet, Flatlist, Button } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = props => {

        const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${cartTotalAmount}</Text>
                </Text>
                <Button title='Order Now' />
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {},
    summaryText: {},
    amount: {}
});

export default CartScreen;