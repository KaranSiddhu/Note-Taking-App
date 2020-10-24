import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default function EditScreen({ navigation }){
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    return (
        <View style={styles.container}>
            
            <TextInput 
                style={styles.inputStyle}
                placeholder='Enter New Title'
                
            />
            
            <TextInput 
                style={styles.inputStyle}
                placeholder='Enter New Content'
            />

            <TouchableOpacity
                style={styles.saveButton}
            >
                
                <Text>Save</Text>

            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     
    inputStyle:{
        borderColor:'red',
        borderWidth:1,
        borderRadius:10,
        width:'70%',
        padding:10,
        marginVertical:10
    },
    saveButton:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius:10,
        width: '50%',
        alignItems:'center',
        backgroundColor:'#add8e6',
        padding:5,
        marginTop:15,
        elevation: 6
    }
});