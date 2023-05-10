import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/books/bookSlice';

const getData = (titleText, authorText) => (
  {
    title: titleText,
    author: authorText,
  }
);

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" id="title" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="button" onClick={() => dispatch(addBook(getData(title, author)))}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
