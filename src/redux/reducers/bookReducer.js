const initialState= {book:[],MyBook:[]};

const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_BOOKS":
            return{...state,books:action.payload};
        case "ADD_BOOK":
                return{...state,myBooks:action.payload};
        case "REMOVE_BOOK":
            return{...state,myBooks:state.myBooks.filter((book)=>book.id !==action.payload)};
        default:
            return state;

    }
};
export default bookReducer;