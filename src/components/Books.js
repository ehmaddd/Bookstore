import { useSelector } from 'react-redux';
import './books.css';
import BookDisplay from './BookDisplay';
import AddBook from './AddBook';

const Books = () => {
  const bookArr = useSelector((state) => state.books);
  return (
    <div>
      <div className="books-div">
        {bookArr.books.map((book) => BookDisplay(book))}
        <hr />
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
