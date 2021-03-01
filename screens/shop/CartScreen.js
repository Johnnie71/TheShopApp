import React from 'react';
import { View, Text, StyleSheet, Flatlist, Button } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = props => {

        const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <View>
            <View>
                <Text>Total: <Text>${cartTotalAmount}</Text></Text>
                <Button title='Order Now' />
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default CartScreen;