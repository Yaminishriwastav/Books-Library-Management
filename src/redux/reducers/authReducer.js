const initialState={
    user:JSON.parse(localStorage.getItem("user"))||null,

};

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return {...state,user:action.paylod};
        case "LOGOUT":
            return{...state,user:null };
      default:
        return state;
    }
};

export default authReducer;