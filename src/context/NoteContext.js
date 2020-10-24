import createDataContext from './createDataContext';

//Reducer
function noteReducer(state, action){

    switch(action.type){
        case 'add':
            return [...state, 
                {
                    title: action.playload.title,
                    content: action.playload.content,
                    id:Math.floor(Math.random() * 99999)
                }
            ];
        
        case 'delete':
            return state.filter(currentValue => currentValue.id !== action.playload);
        default:
            return state;
    }
}

//Actions
function addNote(dispatch){
    return (title, content, callback) => {
        dispatch({type: 'add', playload:{ title, content } });
        callback();
    }; 
} 

function deleteNote(dispatch){
    return (key) => {
        dispatch({type: 'delete', playload:key})
    }
}
 
function editNote(dispatch) {
    return () => {
        dispatch({type: 'edit'});
    }
}
export const {Context, Provider} = createDataContext(
    noteReducer, 
    { addNote, deleteNote, editNote }, 
    []
);