import { createStackNavigator } from 'react-navigation';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary
        }
    }
});