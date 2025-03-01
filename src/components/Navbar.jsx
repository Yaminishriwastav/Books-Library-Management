import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {logout} from "../redux/actions/authAction"
import { Button } from "@chakra-ui/react";

function Navbar(){
    const user=JSON.parse(localStorage.getItem("user"));
    const dispatch=useDispatch();

    return(
        <nav>
            <Link to="/" >"Home"</Link>
            {!user?(
                <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </>
            ):(
               <>
                 <Link to="/mybook">My Books</Link>
                 <Button onClick={()=>dispatch(logout())}>Logout</Button>
               </>
            )}
        </nav>
    );
}

export default Navbar;