import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = props => {
    return (
        <View style={styles.product}>
            <Image />
            <Text>TITLE</Text>
            <Text>PRICE</Text>
            <View>
                <Button title ="View Details" />
                <Button title ="To Cart" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ProductItem;