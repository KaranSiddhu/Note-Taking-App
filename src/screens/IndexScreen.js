import React, { useContext } from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Context } from '../context/NoteContext';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen ({navigation}){
    const { state, deleteNote } = useContext(Context);
    
    return (

        <View style= {styles.container}>
            
            {state.length === 0 ? <Text style={styles.warning}>Press the ' + ' icon to add a new note</Text> : null}

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

                                <TouchableOpacity onPress= {() => deleteNote(item.id)}>
                                    
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
    warning:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
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