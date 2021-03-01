import React from 'react';
import { View, Text, StyleSheet, Flatlist, Button } from 'react-native';

const CartScreen = props => {
    return (
        <View>
            <View>
                <Text>Total: <Text>${19.99}</Text></Text>
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