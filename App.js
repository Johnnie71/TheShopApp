// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import AppLoading  from 'expo-app-loading';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import * as Notifications from 'expo-notifications';

import productsReducer from './store/reducers/products';
import ordersReducer from './store/reducers/orders';
import cartReducer from './store/reducers/cart';
import authReducer from './store/reducers/auth';
import ApplicationNavigator from './navigation/ApplicationNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
        <ApplicationNavigator />
    </Provider>
  );
}


