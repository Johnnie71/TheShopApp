import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const UserProductsScreen = props => {
    return (
        <FlatList data={ProductItem}/>
    )
};

export default UserProductsScreen;