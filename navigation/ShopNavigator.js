import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
// import { createDrawerNavigator} from '@react-navigation/drawer';
import { Platform, SafeAreaView, Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen, { screenOptions as productsOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen, { screenOptions as productDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions} from '../screens/shop/CartScreen';
import OrdersScreen, { screenOptions as orderScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartUpScreen';
import Colors from '../constants/Colors';


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
    return <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
                <ProductsStackNavigator.Screen 
                    name="ProductsOverview" 
                    component={ProductsOverviewScreen}
                    options={productsOverviewScreenOptions}  
                />
                <ProductsStackNavigator.Screen 
                    name="ProductDetail" 
                    component={ProductDetailsScreen} 
                    options={productDetailScreenOptions}
                />
                <ProductsStackNavigator.Screen 
                    name="Cart" 
                    component={CartScreen} 
                    options={cartScreenOptions}
                />
           </ProductsStackNavigator.Navigator>
};

// const ProductsNavigator = createStackNavigator(
//     {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailsScreen,
//     Cart: CartScreen,
// }, {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//                      <Ionicons 
//                           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
//                           size={23}
//                           color={drawerConfig.tintColor}
//                       />
//                   )
// },
// },
//     {
//         defaultNavigationOptions: defaultNavOptions
//     }
// );

// const OrdersNavigator = createStackNavigator({
//     Orders: OrdersScreen,
// }, {
//    navigationOptions: {
//       drawerIcon: drawerConfig => (
//                      <Ionicons 
//                           name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} 
//                           size={23}
//                           color={drawerConfig.tintColor}
//                       />
//                   )
// },
//     defaultNavigationOptions: defaultNavOptions
// });

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
}, {
   navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons 
             name={Platform.OS === 'android' ? 'md-create' : 'ios-create'} 
             size={23}
             color={drawerConfig.tintColor}
        />
      )
},
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
},
    {
     contentOptions: {
        activeTintColor: Colors.primary
     },
     contentComponent: props => {
         return 
     }
    }
);

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
    return <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <OrdersStackNavigator.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={orderScreenOptions}
        />
    </OrdersStackNavigator.Navigator>
};

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
}, {
    defaultNavigationOptions: defaultNavOptions
})

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);