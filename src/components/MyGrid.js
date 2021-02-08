import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOp } from 'react-native';


const MyGrid = ({navigation}) => {
    const books = [
        {name: 'Sapiens'},
        {name: 'Atomic Habits'},
        {name: 'Antifragile'},
        {name: 'Language'}
        // I need to find a way to pass these in another way
    ];
    
    return (
        <View style={styles.myGridContainer}>
            <FlatList
                keyExtractor={(book) => book.name }
                data={books}
                numColumns={2}
                renderItem={({item}) => {
                    return <Text style={styles.myBook}> {item.name} </Text>
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