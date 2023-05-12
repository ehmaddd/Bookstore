import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/bookSlice';
import Circle from '../images/semicircle.png';

const BookDisplay = (book) => {
  const [key, value] = book;
  const { author, title, category } = value[0];
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-book-div">
        <div className="book-display">
          <h1 key={key}> </h1>
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
          <ul className="book-task">
            <li>Comments</li>
            <li>
              <button type="button" onClick={() => dispatch(removeBook({ key }))}>
                Remove
              </button>
            </li>
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
