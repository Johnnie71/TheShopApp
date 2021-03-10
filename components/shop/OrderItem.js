import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CartItem from './CartItem';

const OrderItem = props => {
    return (
        <View style={styles.orderItem} >
            <View>
                <Text>${props.amount.toFixed(2)}</Text>
                <Text>{props.date}</Text>
            </View>
            <Button title="Show Details" />
        </View>
    )
};

const styles = StyleSheet.create({

});


export default OrderItem;