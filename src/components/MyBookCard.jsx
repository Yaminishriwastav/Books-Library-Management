import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "../redux/actions/booksAction";

function MyBookCard({ book }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleRemove = () => {
    dispatch(removeBook(book.id, user.uid));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Heading size="md">{book.title}</Heading>
      <Text>Author: {book.author}</Text>
      <Button colorScheme="red" mt={2} onClick={handleRemove}>
        ❌ Remove
      </Button>
    </Box>
  );
}

export default MyBookCard;
