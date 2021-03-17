import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/shop/UI/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/actions/products';

const EditProductScreen = props => {

    
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    
    const dipatch = useDispatch();

    const productId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === productId)
    );

    const submitHandler = useCallback(() => {
        if(editedProduct) {
            dipatch(
                productActions.updateProduct(productId, title, description, imageUrl)
            );
        } else {
            dispatch(
                productActions.createProduct(title, description, imageUrl, +price)
            );
        }
        props.navigation.goBack();
    }, [dispatch, productId, title, description, imageUrl, price]);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler })
    },[submitHandler]);


    return (
        <ScrollView>
         <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.input}  
                    value={title} 
                    onChangeText={text => setTitle(text)}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput 
                    style={styles.input}
                    value={imageUrl} 
                    onChangeText={text => setImageUrl(text)}
                 />
            </View>
            {editedProduct ? null : (
                <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput 
                        style={styles.input}
                        value={price} 
                        onChangeText={text => setPrice(text)}
                    />
                </View>
            )}
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    style={styles.input}
                    value={description} 
                    onChangeText={text => setDescription(text)}
                 />
            </View>
          </View>
        </ScrollView>
    )

};


EditProductScreen.navigationOptions = navData => {

        const submitFunction = navData.navigation.getParam('submit');

    return {
        headerTitle: navData.navigation.getParam('productId')
         ? 'Edit Product' 
         : 'Add Product',
         headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Save" 
                iconName={ Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark' } 
                onPress={submitFunction} 
            />
        </HeaderButtons>
        ) 
    };
};

const styles = StyleSheet.create({
    form: {
        margin: 20,

    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});


export default EditProductScreen;