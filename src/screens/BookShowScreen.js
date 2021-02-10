import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const BookShowScreen = ( { navigation } ) => {
    const name = navigation.getParam('name')

    console.log(name)
    return <View>
        <Text> {name} </Text>
    </View>
};

const styles = StyleSheet.create({});

export default BookShowScreen;