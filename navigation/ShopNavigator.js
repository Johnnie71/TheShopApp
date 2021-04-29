import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
// import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen, { screenOptions as productsOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen, { screenOptions as productDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions} from '../screens/shop/CartScreen';
import OrdersScreen, { screenOptions as orderScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen, { screenOptions as userProductsScreenOptions } from '../screens/user/UserProductScreen';
import EditProductScreen, { screenOptions as editProductsScreenOptions } from '../screens/user/EditProductScreen';
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

export const ProductsNavigator = () => {
    return (
     <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions} >
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
    )
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

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
    return (
        <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AdminStackNavigator.Screen 
                name="UserProducts" 
                component={UserProductsScreen}
                options={userProductsScreenOptions} 
            />
            <AdminStackNavigator.Screen 
                name="EditProducts" 
                component={EditProductScreen} 
                options={editProductsScreenOptions}
            />
        </AdminStackNavigator.Navigator>
    )
}

// const AdminNavigator = createStackNavigator({
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen
// }, {
//    navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons 
//              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'} 
//              size={23}
//              color={drawerConfig.tintColor}
//         />
//       )
// },
//     defaultNavigationOptions: defaultNavOptions
// });

const ShopDrawerNavigator = createDrawerNavigator();

const ShopNavigator = () => {
    const dispatch = useDispatch();
    return (
        <ShopDrawerNavigator.Navigator 
          drawerContent={props => {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                        <DrawerItemList {...props} />
                        <Button 
                           title="Logout" 
                           color={Colors.primary} 
                           onPress={() => {
                               dispatch(authActions.logout());
                               // props.navigation.navigate('Auth');
                           }} 
                        />
                    </SafeAreaView>
                </View>
            )
          }} 
          drawerContentOptions={{
              activeTintColor: Colors.primary
          }} >
            <ShopDrawerNavigator.Screen 
                name="Products" 
                component={ProductsNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                            size={23}
                            color={props.color}
                        />
                   )
                }}
            />
            <ShopDrawerNavigator.Screen 
                name="Orders" 
                component={OrdersNavigator}
                options={{
                    drawerIcon: props => (
                        <Ionicons 
                            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'} 
                            size={23}
                            color={props.color}
                        />
                    )
                }}
            />
            <ShopDrawerNavigator.Screen 
                name="Admin" 
                component={AdminNavigator}
                options={{
                    drawerIcon: props => (
                      <Ionicons 
                           name={Platform.OS === 'android' ? 'md-create' : 'ios-create'} 
                           size={23}
                           color={props.color}
                      />
                    )
              }}
            />
        </ShopDrawerNavigator.Navigator>
    )
};

// const ShopNavigator = createDrawerNavigator({
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
// },
//     {
//      contentOptions: {
//         activeTintColor: Colors.primary
//      },
//      contentComponent: props => {
//          const dispatch = useDispatch();
//          return (
//              <View style={{flex: 1, paddingTop: 20}}>
//                  <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
//                      <DrawerItems {...props} />
//                      <Button 
//                         title="Logout" 
//                         color={Colors.primary} 
//                         onPress={() => {
//                             dispatch(authActions.logout());
//                             // props.navigation.navigate('Auth');
//                         }} 
//                      />
//                  </SafeAreaView>
//              </View>
//          )
//      }
//     }
// );

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
    return (
     <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <OrdersStackNavigator.Screen 
            name="Orders" 
            component={OrdersScreen}
            options={orderScreenOptions}
        />
     </OrdersStackNavigator.Navigator>
    )
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {

};

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen
// }, {
//     defaultNavigationOptions: defaultNavOptions
// })

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Shop: ShopNavigator
// });

export default createAppContainer(MainNavigator);