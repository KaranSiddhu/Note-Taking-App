import React, { useContext, useEfect, useEffect } from 'react';
import {View, FlatList, TouchableOpacity, ToastAndroid, Text, StyleSheet} from 'react-native';
import { Context } from '../context/NoteContext';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen ({navigation}){
    const { state, deleteNote, getNotes } = useContext(Context);
    
    useEffect(() =>{
        getNotes();

        const listener = navigation.addListener('didFocus', () => {
            getNotes();
        });

        return () => {
            listener.remove();
        }

    }, [])
    
    return (

        <View style= {styles.container}>

            <FlatList 
                data= {state}
                keyExtractor= {(item) => item.id + ' '}
                renderItem= {({ item }) => {
                    return (
                        <TouchableOpacity 
                            style= {styles.blogPostStyle} 
                            onPress= {() => navigation.navigate('Show', {
                                blogId: item.id
                            })}
                        >
                            
                                <Text style={styles.title}>{item.title} - {item.id}</Text>

                                <TouchableOpacity onPress= {() => {
                                        deleteNote(item.id)
                                        ToastAndroid.show('Please wait',ToastAndroid.SHORT);
                                    }}>
                                    
                                    <AntDesign
                                        name="delete" 
                                        size={24}
                                        color="black"
                                    />
                                
                                </TouchableOpacity>

                        </TouchableOpacity>
                    );
                } }

            />

        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
                <TouchableOpacity
                    onPress= {() => navigation.navigate('Create')}
                >

                    <Feather name="plus" size={30} style={styles.addIcon} color="black" />

                </TouchableOpacity>
            )
    };
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1
    },

    blogPostStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 12,
        padding:10
    },
    title:{
        fontSize:18,
        fontWeight: 'bold'
    },
    addIcon:{
        marginRight: 10
    }

});