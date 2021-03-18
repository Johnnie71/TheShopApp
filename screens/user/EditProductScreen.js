import React, { useEffect, useCallback, useReducer } from 'react';
import { 
    View, 
    ScrollView, 
    Text, 
    TextInput, 
    StyleSheet, 
    Platform, 
    Alert 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/actions/products';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE){

    }
};

const EditProductScreen = props => {

    const productId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state => 
        state.products.userProducts.find(prod => prod.id === productId)
    );
    
    const dispatch = useDispatch();

       const [formState, dispatchFormState] = useReducer(formReducer, { 
            inputValues: {
                title: editedProduct ? editedProduct.title : '',
                imageUrl: editedProduct ? editedProduct.imageUrl : '',
                description: editedProduct ? editedProduct.description : '',
                price: ''
            }, 
            inputValidities: {
                title: editedProduct ? true : false,
                imageUrl: editedProduct ? true : false,
                description: editedProduct ? true : false,
                price: editedProduct ? true : false,

            }, 
            formIsValid: editedProduct ? true : false,
        });


    const submitHandler = useCallback(() => {
        if(!titleIsValid) {
            Alert.alert('Wrong input!', 'Please check the errors in the form.', [
                { text: "Okay" }
            ]);
            return;
        }
        if(editedProduct) {
            dispatch(
                productActions.updateProduct(productId, title, description, imageUrl)
            );
        } else {
            dispatch(
                productActions.createProduct(title, description, imageUrl, +price)
            );
        }
        props.navigation.goBack();
    }, [dispatch, productId, title, description, imageUrl, price, titleIsValid]);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler })
    },[submitHandler]);

    const titleChangeHandler = (text) => {
        let isValid = false;
        if(text.trim().length > 0){
          isValid = true;
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: text, 
            isValid: isValid,
            input: 'title'
        });
    };

    return (
        <ScrollView>
         <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.input}  
                    value={title} 
                    onChangeText={titleChangeHandler}
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                />
                {!titleIsValid && <Text>Please enter a valid title!</Text>}
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
                        keyboardType='decimal-pad'
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