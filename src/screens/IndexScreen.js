import React, { useContext } from 'react';
import {View, FlatList, TouchableOpacity, Button, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View style= {styles.container}>
            
            <Button 
                onPress= {() => addBlogPost()}
                title= 'Add Blog'
            />

           
            <FlatList 
                data= {state}
                keyExtractor= {(item) => item.id + " "}
                renderItem= {({ item }) => {
                    return (
                        <TouchableOpacity 
                            style= {styles.blogPostStyle} 
                            onPress= {() => navigation.navigate('ShowScreen', {
                                blogTitle: item.title
                            })}
                        >
                            
                                <Text style={styles.title}>{item.title}</Text>

                                <TouchableOpacity onPress= {() => deleteBlogPost(item.id)}>
                                    
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
    }

});

export default IndexScreen;