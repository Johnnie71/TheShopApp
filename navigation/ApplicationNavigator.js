import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShopNavigator from './ShopNavigator';

const MyStack = createStackNavigator();

const ApplicationNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    return (
        <NavigationContainer>
            <MyStack.Navigator>
                <MyStack.Screen />
            </MyStack.Navigator>
        </NavigationContainer>
    );
};

export default ApplicationNavigator;