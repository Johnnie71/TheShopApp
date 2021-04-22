import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    const isAuth = useSelector(state => !!state.auth.token);

    useEffect(() => {
        if (!isAuth) {
            
        }
    }, [isAuth]);

    return <ShopNavigator />;
};

export default NavigationContainer;