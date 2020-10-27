import React, {useState} from 'react';
import {Text, TextInput, Alert, ToastAndroid, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function NoteForm ({onSubmit, defaultTitle, defaultContent, navigation}) {
    const [title, setTitle] = useState(defaultTitle);
    const [content, setContent] = useState(defaultContent);

    return (
        <View style={styles.container}>

            <TextInput 
                style={styles.inputStyle}
                placeholder='Enter Title'
                value= {title}
                onChangeText= {(value) => setTitle(value)}
            />
            
            <TextInput 
                style={styles.inputStyle}
                multiline
                placeholder='Enter Content'
                value= {content}
                onChangeText= {(value) => setContent(value)}
            />

            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                        ToastAndroid.show('Please wait', ToastAndroid.LONG);
                        if(title === '' || content === '')
                            return Alert.alert('Please fill in the required fields.');
                        else
                            return onSubmit(title, content);

                        }
                    }
            >
                
                <Text>Save</Text>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
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

