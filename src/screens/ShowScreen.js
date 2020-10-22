import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ShowScreen({navigation}){

    const blogTitle= navigation.getParam('blogTitle');
    
    return (
        <View>

            <Text>{blogTitle}</Text>

        </View>
    );
}

const styles = StyleSheet.create({});