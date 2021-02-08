import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import MyGrid from '../components/MyGrid';

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            <MyHeader title="Welcome to LeitnerBooks!"/>

            <Entypo name="hand" style={styles.iconStyle}/>

            <Text style={styles.text}>
                LeitnerBooks is the easiest way to remember what you've learned!
            </Text>

            <Text style={styles.text}>
                Whether you like non-fiction, or fiction, or whatever you fancy we've got it for you. Don't you worry about it.
            </Text>
            <View >

            <MyButton title='sovs' onPress={() => navigation.navigate('Home')} />
            

            </View>
        
                
        </View>
    );  
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },
    container: {
        marginTop: 50,
        justifyContent: 'center',
        borderColor: 'blue',
        padding: 20,
        borderWidth: 3,
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 35
    }
});

export default WelcomeScreen;