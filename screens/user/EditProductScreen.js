import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native';

const EditProductScreen = props => {
    return (
        <ScrollView>
            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} />
            </View>
        </ScrollView>
    )

};

const styles = StyleSheet.create({

});

export default EditProductScreen;