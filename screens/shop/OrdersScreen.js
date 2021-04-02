import React, { useEffect, useState } from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import * as ordersActions from '../../store/actions/orders';

const OrdersScreen = props => {

     const [isLoading, setIsLoading] = useState(false);

     const orders = useSelector(state => state.orders.orders);
     const dispatch = useDispatch();

     useEffect(() => {
         setIsLoading(true);
        dispatch(ordersActions.fetchOrders().then(() => {
            setIsLoading(false);
        }));
     }, [dispatch])

     return (
         <FlatList 
         data={orders} 
         keyExtractor={item => item.id} 
         renderItem={itemData => (
                <OrderItem 
                    amount={itemData.item.totalAmount} 
                    date={itemData.item.readableDate} 
                    items={itemData.item.items}
                />
            ) } 
         />
     );
};

export const screenOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Menu" 
                iconName={ Platform === 'android' ? 'md-menu' : 'ios-menu' } 
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }} 
            />
        </HeaderButtons>,

    };
};


export default OrdersScreen;