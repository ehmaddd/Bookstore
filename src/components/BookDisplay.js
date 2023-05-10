import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/bookSlice';
import Circle from '../images/semicircle.png';

const BookDisplay = (book) => {
  const dispatch = useDispatch();
  const { itemId, title, author } = book;
  return (
    <>
      <div className="main-book-div">
        <div className="book-display">
          <h1 key={itemId}> </h1>
          <h2>{title}</h2>
          <p>{author}</p>
          <ul className="book-task">
            <li>Comments</li>
            <li><button type="button" onClick={() => dispatch(removeBook({ itemId }))}>Remove</button></li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="status">
          <img src={Circle} alt="" />
          <h4>
            %
          </h4>
          <p className="completed">Completed</p>
        </div>
        <div className="divider" />
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <p> </p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

export default BookDisplay;
