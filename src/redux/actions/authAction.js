import {auth} from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
 
const LOGIN_SUCCESS="LOGIN_SUCCESS";
const LOGOUT ="LOGOUT";

export const emailLogin=(email,password)=>async(dispatch)=>{
    const result=await signInWithEmailAndPassword(auth,email,password);
    localStorage.setItem("user",JSON.stringify(result.user));
    dispatch({type:LOGIN_SUCCESS, payload:result.user});
};
export const emailSignup=(email,password)=>async(dispatch)=>{
    const result=await createUserWithEmailAndPassword(auth,email,password);
    localStorage.setItem("user",JSON.stringify(result.user));
    dispatch({type:LOGIN_SUCCESS, payload:result.user});
};
export const logout=()=>async(dispatch)=>{
  await signOut(auth);
  localStorage.removeItem("user");
  dispatch({type:LOGOUT});
};