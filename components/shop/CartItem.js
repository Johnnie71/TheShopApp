import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
    return (
        <View>
            <Text>
                <Text>QTY</Text><Text>TITLE</Text>
            </Text>
            <View>
                <Text>$AMT</Text>
                <TouchableOpacity>
                    <Ionicons />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default CartItem;