import { Grid } from "@chakra-ui/react";
import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} p={4}>
      {books.length === 0 ? <p>No books available</p> : books.map((book) => <BookCard key={book.id} book={book} />)}
    </Grid>
  );
}

export default BookList;
