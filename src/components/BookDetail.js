import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const BookDetail = ({result}) => {
    return <View>
        <Text style={styles.myBook}> {result.name} </Text>
    </View>
};

const styles = StyleSheet.create({
    myBook: {
        borderWidth: 2,
        borderColor: 'red',
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1,
    }
});

export default BookDetail;