import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ProductsNavigator } from './ShopNavigator';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';


const ApplicationNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return (
        <NavigationContainer>
            <ProductsNavigator />
        </NavigationContainer>
    );
};

export default ApplicationNavigator;