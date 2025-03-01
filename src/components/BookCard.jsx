import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/actions/booksAction";

function BookCard({ book }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddToMyBooks = () => {
    if (user) {
      dispatch(addBook(book, user.uid));
    } else {
      alert("Please log in to save books!");
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Heading size="md">{book.title}</Heading>
      <Text>Author: {book.author}</Text>
      <Button colorScheme="blue" onClick={handleAddToMyBooks} mt={2}>
        Want to Read
      </Button>
    </Box>
  );
}

export default BookCard;
