import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    
    const isAuth = useSelector(state => !!state.auth.token);

    return <ShopNavigator />;
};

export default NavigationContainer;