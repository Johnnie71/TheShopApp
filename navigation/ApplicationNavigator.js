import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './ShopNavigator';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';


const ApplicationNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return (
        <NavigationContainer>
            
        </NavigationContainer>
    );
};

export default ApplicationNavigator;