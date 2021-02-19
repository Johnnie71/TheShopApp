// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,

});

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <ShopNavigator />
        <Text>Hello</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
