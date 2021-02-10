import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const BookShowScreen = ( { navigation } ) => {
    const book = navigation.getParam('book')
    // const author = navigation.getParam('author')

    console.log(book)
    return <View>
        <Text> Title: {book.name} </Text>
        <Text> Author: {book.author} </Text>
    </View>
};

const styles = StyleSheet.create({});

export default BookShowScreen;