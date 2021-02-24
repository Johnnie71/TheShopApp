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
           <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }}/>
           <Button title="Add To Cart" onPress={() => {}} />
           <Text style={styles.price} >${selectedProduct.price.toFixed(2)}</Text>
           <Text style={styles.description} >{selectedProduct.description}</Text>
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