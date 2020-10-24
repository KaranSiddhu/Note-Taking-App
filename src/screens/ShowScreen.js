import React,{useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Context } from '../context/NoteContext';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ShowScreen({navigation}){

    const { state } = useContext(Context);

    //* This ' item ' is the Array of Object that contains the blog title, content and id 

    const blogPost = state.find((item) => item.id === navigation.getParam('blogId'));
    
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>

        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit')}
            >  

                <FontAwesome name="pencil-square-o" size={24} color="black" style={styles.editIcon} />
            
            </TouchableOpacity>
        )   
    };
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    title:{
        fontSize:22,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    content:{
        fontSize:17
    },
    editIcon:{
        marginRight: 12
    }
});