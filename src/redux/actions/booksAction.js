import {db,ref,onValue,push,remove} from "../../firebase/firebaseConfig"

const FETCH_BOOKS="FETCH_BOOKS";
const ADD_BOOK="ADD_BOOK";
const REMOVE_BOOK="REMOVE_BOOK";

export const fetchBooks=()=>(dispatch)=>{
    onValue(ref(db,"books"),(snapshot)=>{
        const data=snapshot.val();
        const bookList=data?Object.entries(data).map(([IdleDeadline,book])=>({id,...book})):[];
        dispatch({type:FETCH_BOOKS,payload:bookList});
    });
};

export const addBook=(book, userId)=>async(dispatch)=>{
    const newRef=push(ref(db,`users/${userId}/myBooks`),book);
    dispatch({type:ADD_BOOK,payload:{id:newRef.key,...book}});
};

export const removeBook=(bookId,userId)=>async(dispatch)=>{
    await remove(ref(db,`users/${userId}/mybooks/${bookId}`));
     dispatch({type:REMOVE_BOOK,payload:bookId})
};