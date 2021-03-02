import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CartItem = props => {
    return (
        <View>
            <Text>
                <Text>QTY</Text><Text>TITLE</Text>
            </Text>
            <View>
                <Text>$AMT</Text>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CartItem;