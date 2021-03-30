import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Platform, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';
import Colors from '../../constants/Colors';
import { isLoading } from 'expo-font';

const ProductsOverviewScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            await dispatch(productActions.fetchProducts());
            setIsLoading(false);
        };
        loadProducts();
    }, [dispatch]);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', { 
            productId: id,
            productTitle: title
        });
    };

    if (isLoading) {
        <View>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    }

    return(
        <FlatList 
        data={products} 
        keyExtractor={item => item.id} 
        renderItem={itemData => (
            <ProductItem image={itemData.item.imageUrl} 
            title={itemData.item.title} 
            price={itemData.item.price} 
            onSelect={() => {
                selectItemHandler(itemData.item.id, itemData.item.title);
            }} 
            >
                <Button 
                    color={Colors.primary} 
                    title ="View Details" 
                    onPress={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title);
                    }} 
                />
                <Button 
                    color={Colors.primary} 
                    title ="To Cart" 
                    onPress={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }} 
                />
            </ProductItem>
        )}/>
    );
};

export const screenOptions = navData => {

    return {
    headerTitle: 'All Products',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title="Menu" 
            iconName={ Platform.OS === 'android' ? 'md-menu' : 'ios-menu' } 
            onPress={() => {
                navData.navigation.toggleDrawer();
            }} 
        />
</HeaderButtons>,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title="Cart" 
            iconName={ Platform.OS === 'android' ? 'md-cart' : 'ios-cart' } 
            onPress={() => {
                navData.navigation.navigate('Cart')
            }} 
        />
    </HeaderButtons>
    };
};

export default ProductsOverviewScreen;