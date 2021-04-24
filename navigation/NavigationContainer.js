import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return ;
};

export default NavigationContainer;