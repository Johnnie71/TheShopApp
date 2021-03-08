import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import OrdersScreen from '../screens/shop/OrdersScreen';

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
    return <ProductsStackNavigator.Navigator>
                <ProductsStackNavigator.Screen 
                    name="ProductsOverview" 
                    component={ProductsOverviewScreen}  
                />
                <ProductsStackNavigator.Screen 
                    name="ProductDetail" 
                    component={ProductDetailsScreen} 
                />
                <ProductsStackNavigator.Screen 
                    name="Cart" 
                    component={CartScreen} 
                />
           </ProductsStackNavigator.Navigator>
};

// const ProductsNavigator = createStackNavigator(
//     {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailsScreen,
//     Cart: CartScreen,
// }, 
//     {
//         defaultNavigationOptions: defaultNavOptions
//     });

// const OrdersNavigator = createStackNavigator({
//     Orders: OrdersScreen,
// }, {
//     defaultNavigationOptions: defaultNavOptions
// });

// const ShopNavigator = createDrawerNavigator({
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator
// },
//     {
//      contentOptions: {
//         activeTintColor: Colors.primary
//      }
//     }
// );

export default createAppContainer(ProductsNavigator);