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
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
        );


    return (
       <ScrollView>
           <Image source={{ uri: selectedProduct.imageUrl }}/>
           <Button />
           <Text></Text>
           <Text></Text>
       </ScrollView>
    )
};

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
};

const styles = StyleSheet.create({

});

export default ProductDetailsScreen;