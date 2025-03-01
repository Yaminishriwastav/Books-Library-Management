import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignup } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { Box,Input,Heading, Button } from "@chakra-ui/react";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(emailSignup(email, password));
    navigate("/");
  };

  return (
    <Box>
      <Heading>Registe</Heading>
      <form onSubmit={handleSignup}>
        <Input 
        type="email" 
        placeholder="Email"
         onChange={(e) => setEmail(e.target.value)} 
         />
        <Input 
        type="password"
         placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)} 
         />
        
        <Button color="blue" type="submit">Register</Button>
      </form>
    </Box>
  );
}

export default Register;
