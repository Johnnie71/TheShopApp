import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = props => {
    return (
        <View style={styles.product}>
            <Image style={styles.image} source={{uri: props.image}} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            <View style={styles.actions}>
                <Button title ="View Details" onPress={props.onViewDetail} />
                <Button title ="To Cart" onPress={props.onAddToCart} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {

    },
    price: {

    },
    actions: {
        
    }
});

export default ProductItem;