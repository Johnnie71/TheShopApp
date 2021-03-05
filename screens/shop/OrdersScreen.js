import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const OrdersScreen = props => {
     const orders = useSelector(state => state.orders.orders);
};

const styles = StyleSheet.create({

});

export default OrdersScreen;