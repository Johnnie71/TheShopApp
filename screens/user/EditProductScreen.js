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
import Input from '../../components/UI/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };

        let updatedFormIsValid = true;
        for(const key in updatedValidities){
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    };
    return state;
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
        if(!formState.formIsValid) {
            Alert.alert('Wrong input!', 'Please check the errors in the form.', [
                { text: "Okay" }
            ]);
            return;
        }
        if(editedProduct) {
            dispatch(
                productActions.updateProduct(
                    productId, 
                    formState.inputValues.title, 
                    formState.inputValues.description, 
                    formState.inputValues.imageUrl
                )
            );
        } else {
            dispatch(
                productActions.createProduct(
                    formState.inputValues.title, 
                    formState.inputValues.description, 
                    formState.inputValues.imageUrl, 
                    +formState.inputValues.price
                )
            );
        }
        props.navigation.goBack();
    }, [dispatch, productId, formState]);

    useEffect(() => {
        props.navigation.setParams({submit: submitHandler })
    },[submitHandler]);

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = false;
        if(text.trim().length > 0){
          isValid = true;
        }
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: text, 
            isValid: isValid,
            input: inputIdentifier
        });
    };

    return (
        <ScrollView>
         <View style={styles.form}>
            <Input 
                label="Title"
                errorText="Please enter a valid title!"
                keyboardType='default'
                autoCapitalize='sentences'
                autoCorrect
                returnKeyType='next'
             />
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput 
                    style={styles.input}
                    value={formState.inputValues.imageUrl} 
                    onChangeText={textChangeHandler.bind(this, 'imageUrl')}
                 />
            </View>
            {editedProduct ? null : (
                <View style={styles.formControl}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput 
                        style={styles.input}
                        value={formState.inputValues.price} 
                        onChangeText={textChangeHandler.bind(this, 'price')}
                        keyboardType='decimal-pad'
                    />
                </View>
            )}
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    style={styles.input}
                    value={formState.inputValues.description} 
                    onChangeText={textChangeHandler.bind(this, 'description')}
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

    }
});


export default EditProductScreen;