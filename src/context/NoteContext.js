import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//Reducer
function noteReducer(state, action){

    switch(action.type){
        case 'get':
            return action.playload; 
            /*
                * Notice that we did not do [...state, actio.playload] 
                * The reason is because our api server will return every single data for us.
            */

        // case 'add':
        //     return [...state, 
        //         {
        //             title: action.playload.title,
        //             content: action.playload.content,
        //             id:Math.floor(Math.random() * 99999)
        //         }
        //     ];
        
        case 'delete':
            return state.filter(currentValue => currentValue.id !== action.playload);
        
        case 'edit': 
            return state.map((blogPost) => {
                if(blogPost.id === action.playload.id){
                    return action.playload;
                }else{
                    return blogPost;
                }
            });
        
        default:
            return state;
    }
}

//Actions

function getNotes(dispatch){
    return async () => {
        const response = await jsonServer.get('/notes');
        //* response.data === [{}, {}, {}]

        dispatch({type:'get', playload: response.data});

    }
}

function addNote(dispatch){
    return async (title, content, callback) => {
        await jsonServer.post('/notes',{title, content});

        // dispatch({type: 'add', playload:{ title, content } });
        if(callback)
            callback();
    }; 
} 

function deleteNote(dispatch){
    return async (id) => {
        await jsonServer.delete(`/notes/${id}`)
        dispatch({type: 'delete', playload:id})
    };
}
 
function editNote(dispatch) {
    return async (callback, id, title, content) => {
        await jsonServer.put(`notes/${id}`,{title, content});

        dispatch({type: 'edit', playload: {id, title, content}});
        callback();
    };
}

export const {Context, Provider} = createDataContext(
    noteReducer, 
    {getNotes ,addNote, deleteNote, editNote}, 
    []
);