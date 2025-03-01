import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchBooks } from "@/redux/actions/booksAction";
import BookList from "../components/BookList";
import { Box,Heading} from "@chakra-ui/react";
function Home(){
    const dispatch=userDispatch();
    const books =useSelector((state)=>state.books.books);

    useEffect(()=>{
        dispatch(fetchBooks());
    },[dispatch]);

    return(
        <Box>
          <Heading>📚 Welcome to Book Library</Heading>
          <BookList books={books}/>
        </Box>
    );
}
export default Home;