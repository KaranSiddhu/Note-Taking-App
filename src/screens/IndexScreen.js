import React, { useContext } from 'react';
import {View, FlatList, Button, Text, StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            
            <Button 
                onPress= {() => addBlogPost()}
                title= 'Add Blog'
            />

            <FlatList 
                data= {data}
                keyExtractor= {(item) => item.title}
                renderItem= {({ item }) => {
                    return <Text>{item.title}</Text>
                } }

            />

        </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;