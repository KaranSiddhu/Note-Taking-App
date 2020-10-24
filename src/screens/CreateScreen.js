import React, {useState, useContext} from 'react';
import {Text, TextInput, Alert, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Context } from '../context/NameContext';


export default function CreateScreen({ navigation }){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addNote } = useContext(Context);
    
    return (
        <View style={styles.container}>

            <TextInput 
                style={styles.inputStyle}
                value= {title}
                placeholder='Enter Title'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText= {(value) => setTitle(value)}
            />

            <TextInput 
                style={styles.inputStyle}
                placeholder='Enter Content'
                autoCapitalize='none'
                autoCorrect={false}
                value= {content}
                multiline
                onChangeText= {(value) => setContent(value)}
            />

            <TouchableOpacity
                style={styles.saveButton}
                onPress= {() => {
                    if(title === '' || content === '')
                        return Alert.alert('Please fill in the required fields');
                    else{
                        addNote(title, content, () => { navigation.navigate('Home'); })
                    }
                }}
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