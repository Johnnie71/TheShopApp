import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator, AuthNavigator } from './ShopNavigator';


const ApplicationNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return (
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
    );
};

export default ApplicationNavigator;