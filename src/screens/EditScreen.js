import React, {useContext} from 'react';
import { Context } from '../context/NoteContext';
import NoteForm from '../component/NoteForm';

export default function EditScreen({ navigation }){
    const { state, editNote } = useContext(Context);
    const id =  navigation.getParam('id');
    const blogPost = state.find((item) => item.id === id);
    
    return <NoteForm 
        defaultTitle={blogPost.title}
        defaultContent={blogPost.content}
        onSubmit={(title, content) => editNote( () => {navigation.goBack()} ,id, title, content)}
    />
}