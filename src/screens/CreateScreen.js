import React, {useContext} from 'react';
import { Context } from '../context/NoteContext';
import NoteForm from '../component/NoteForm';

export default function CreateScreen({navigation}){
   
    const { addNote } = useContext(Context);
    
    return <NoteForm
            onSubmit= { (title, content) => addNote(title, content, () => navigation.navigate('Home')) } 
            defaultTitle=''
            defaultContent=''
         />
}