import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MyButton from '../components/MyButton';
import MyGrid from '../components/MyGrid';

const HomeScreen = ({ navigation }) => {
    const books = [
        {name: 'Sapiens'},
        {name: 'Atomic Habits'},
        {name: 'Antifragile'},
        {name: 'Language'}
        // I need to find a way to pass these in another way
    ];

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.header}> Test </Text>
            </View>
            <View>
                <MyGrid
                    navigation={navigation}
                    books={books}
                />
                <MyButton title='Study cards'/>
            </View>
            
        </View>
    );  
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },
    container: {
        justifyContent: 'center',
        // borderColor: 'blue',
        // borderWidth: 3,
        alignItems: 'center'
    }

});

export default HomeScreen;