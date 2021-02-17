import PRODUCTS from '../../data/dummy-data';

const initialState = {
    avalailableProducts: PRODUCTS,
    userProducts: []
};

export default (state = initialState, action) => {
    return state;
};