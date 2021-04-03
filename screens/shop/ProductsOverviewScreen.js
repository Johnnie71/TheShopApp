import React, { useEffect, useState, useCallback } from 'react';
import { View, 
    FlatList, 
    Button, 
    Platform, 
    ActivityIndicator, 
    StyleSheet, 
    Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const loadProducts = useCallBack(async () => {
        setError(null);
        try {
            await dispatch(productActions.fetchProducts());
        } catch (err) {
            setError(err.message);
        }
    },[dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocus = props.navigation.addListener(
            'willFocus', 
            loadProducts
        );

        return () => {
            willFocus.remove();
        };
    }, [loadProducts])

    useEffect(() => {
        loadProducts();
    }, [dispatch, loadProducts]);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', { 
            productId: id,
            productTitle: title
        });
    };

    if (error) {
        return (
            <View style={styles.loading}>
            <Text>An error occured!</Text>
            <Button 
                title='Try again' 
                onPress={loadProducts} 
                color={Colors.primary} 
            />
        </View>
        )
    }

    if (isLoading) {
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    }

    if (!isLoading && products.length === 0) {
        <View style={styles.loading}>
            <Text>No products found. Maybe start adding some!</Text>
        </View>
    }

    return(
        <FlatList 
        onRefresh={loadProducts}
        refreshing={isLoading}
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

const styles = StyleSheet.create({
    loading: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default ProductsOverviewScreen;