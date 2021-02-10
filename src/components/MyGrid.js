import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BookDetail from './BookDetail';


const MyGrid = ({books, navigation}) => {
    
    return (
        <View style={styles.myGridContainer}>
            <FlatList
                keyExtractor={(book) => book.name }
                data={books}
                numColumns={2}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Book', {book: item})}>
                            <BookDetail result={item}/> 
                        {/* // Note, den øvrige burde jeg putte i sit eget component, se video 113-115 (tror jeg) */}
                        </TouchableOpacity>
                        )
                    }}
                /> 
            {/* <Text style={styles.myBook}> Griddy </Text> */}
        </View>
        
    );  
};

const styles = StyleSheet.create({
    myGridContainer: {
        // borderWidth: 3,
        // borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    myBook: {
        borderWidth: 2,
        borderColor: 'red',
        paddingVertical: 60,
        paddingHorizontal: 20,
        flex: 1,
    }
});

export default MyGrid;