import createDataContext from './createDataContext';

//Reducer
function blogReducer(state, action){

    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `BLog Post#${state.length + 1}`,
             id:Math.floor(Math.random() * 99999)}];
        
        case 'delete_blogpost':
            return state.filter(currentValue => currentValue.id !== action.playload);
        default:
            return state;
    }
}

//Actions
function addBlogPost(dispatch){
    return () => {
        dispatch({type: 'add_blogpost'})
    }; 
} 

function deleteBlogPost(dispatch,){
    return (key) => {
        dispatch({type: 'delete_blogpost', playload:key})
    }
}
 
export const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    []
);