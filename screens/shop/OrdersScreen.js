import React from 'react';
import { StyleSheet, FlatList, } from 'react-native';
import { useSelector } from 'react-redux';

const OrdersScreen = props => {
     const orders = useSelector(state => state.orders.orders);

     return (
         <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => {}} />
     )
};

const styles = StyleSheet.create({

});

export default OrdersScreen;