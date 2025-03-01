import { useSelector } from "react-redux";
import MyBookCard from "../components/MyBookCard";
import { Heading,Box } from "@chakra-ui/react";
function MyBookPage() {
  const myBooks = useSelector((state) => state.books.myBooks);

  return (
    <Box>
      <Heading>📖 My Saved Books</Heading>
      {myBooks.length === 0 ? <p>No books added yet.</p> : myBooks.map((book) => <MyBookCard key={book.id} book={book} />)}
    </Box>
  );
}

export default MyBookPage;
