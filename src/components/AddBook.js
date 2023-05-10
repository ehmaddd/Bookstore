import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/bookSlice';

const getData = () => {
  const titleField = document.querySelector('#title');
  const authorField = document.querySelector('#author');
  const titleText = titleField.value;
  const authorText = authorField.value;
  titleField.value = '';
  authorField.value = '';
  return {
    title: titleText,
    author: authorText,
  };
};

const AddBook = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" id="title" placeholder="Book Title" />
        <input type="text" id="author" placeholder="Author" />
        <button type="button" onClick={() => dispatch(addBook(getData()))}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
