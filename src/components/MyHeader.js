import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyHeader = ({title}) => {
    return (
        <Text style={styles.myHeaderStyle}> {title} </Text>
    );  
};

const styles = StyleSheet.create({
    myHeaderStyle: {
        fontSize: 20
    }
});

export default MyHeader;