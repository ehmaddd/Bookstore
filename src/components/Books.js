import { useSelector } from 'react-redux';
import './books.css';
import BookDisplay from './BookDisplay';
import AddBook from './AddBook';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  if (isLoading === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="books-div">
        {Object.entries(books).map((item) => BookDisplay(item))}
        <hr />
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
