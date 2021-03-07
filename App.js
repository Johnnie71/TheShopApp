// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import AppLoading  from 'expo-app-loading';
import * as Font from 'expo-font';


import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import ordersReducer from './store/reducers/orders';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer);

// const fetchFonts = () => Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });

export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);

  // if(!fontLoaded){
  //   return <AppLoading 
  //             startAsync={fetchFonts} 
  //             onError={() => {}}
  //             onFinish={() => {
  //               setFontLoaded(true);
  //             }} 
  //           />
  // };


  return (
    <Provider store={store} >
   
        <ShopNavigator />
     
    </Provider>
  );
}


