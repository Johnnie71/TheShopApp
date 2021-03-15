import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT }from '../actions/products';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
    switch (action.type){
        case CREATE_PRODUCT: 
            const newProduct = new Product(
                new Date().toString(), 
                'u1', action.productData.title, 
                action.productData.imageUrl, 
                action.productData.description, 
                action.productData.price
            );
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct)
            }
        case UPDATE_PRODUCT:
        case DELETE_PRODUCT: 
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id !== action.pid
                 ),
                 availableProducts: state.availableProducts.filter(
                     product => product.id !== action.pid
                 )
            }
    }
    return state;
};