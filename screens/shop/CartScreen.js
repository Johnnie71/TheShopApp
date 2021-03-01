import React from 'react';
import { View, Text, StyleSheet, Flatlist, Button } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useSelector } from 'react-redux';

const CartScreen = props => {

        const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
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
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: '#E55E50'
    }
});

export default CartScreen;