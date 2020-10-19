import createDataContext from './createDataContext';
//Reducer
function blogReducer(state, action){

    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `BLog Post#${state.length + 1}`}];
        
        default:
            return state;
    }

}

//Actions
function addBlogPost(){
        runMyBlogReducer({type: 'add_blogpost'})
}
 
export default const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost }, 
    []
);