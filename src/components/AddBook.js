import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sendBook } from '../Redux/books/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const bookCategory = ['Fiction', 'Non-fiction', 'Mystery', 'History', 'Science', 'Thriller', 'Fantasy', 'Autobiography'];
  const bookCat = bookCategory[Math.floor(Math.random() * 7)];
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" id="title" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button
          type="button"
          onClick={() => dispatch(sendBook(
            {
              item_id: uuidv4(), title, author, category: bookCat,
            },
          ))}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
