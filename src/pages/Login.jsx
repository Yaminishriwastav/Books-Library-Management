import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailLogin } from "@/redux/actions/authAction";
import { Form, useNavigate } from "react-router-dom";
import { Heading,Box,Input, Button } from "@chakra-ui/react";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(emailLogin(email,password));
        navigate("/");
    }
    return(
        <Box>
            <Heading>Login</Heading>
            <form onSubmit={handleLogin}>
                <Input 
                type="email"
                 placeholder="Email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 />
                <Input
                 type="password" 
                 placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <Button colorPalette="blue" color="black" type="submit">Login</Button>
            </form>
        </Box>
    )
}