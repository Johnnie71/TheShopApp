import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Platform } from 'react-native';

import ProductsOverviewScreen, { screenOptions as productsOverviewScreenOptions } from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen, { screenOptions as productDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions} from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
// import OrdersScreen from '../screens/shop/OrdersScreen';


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
// }, 
//     {
//         defaultNavigationOptions: defaultNavOptions
//     }
// );

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