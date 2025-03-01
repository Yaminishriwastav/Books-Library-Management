import{ legacy_createStore as createStore,applyMiddleWare,combineReducers} from "redux"
import thunk from "thunk";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/bookReducer";


const rootReducer=combineReducers({
    auth: authReducer,
    books:bookReducer,
});

const store=createStore(rootReducer,applyMiddleWare(thunk));
export default store;