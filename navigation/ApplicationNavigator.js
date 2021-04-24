import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShopNavigator from './ShopNavigator';

const ApplicationNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return ;
};

export default ApplicationNavigator;