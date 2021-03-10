import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Colors } from '../../constants/Colors';
import CartItem from './CartItem';

const OrderItem = props => {
    return (
        <View style={styles.orderItem} >
            <View style={styles.summary} >
                <Text style={styles.totalAmount} >${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button color={Colors.primary} title="Show Details" />
        </View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summary: {

    },
    totalAmount: {

    },
    date: {

    }
});


export default OrderItem;