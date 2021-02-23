import React from 'react';
import { ScrollView, 
    View, 
    Text, 
    Image, 
    Button, 
    StyleSheet, 
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = props => {

    const productId = props.navigation.getParam('productId');


    return (
        <View>
            <Text>The Product Detail Screen!</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ProductDetailsScreen;