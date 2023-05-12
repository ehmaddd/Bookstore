import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/bookSlice';
import Circle from '../images/semicircle.png';

const BookDisplay = (book) => {
  const [key, value] = book;
  const { author, title, category } = value[0];
  const chapters = ['Eating At The East', 'Answering Eternity', 'Snakes Of The Frontline', 'Horses And Boys', 'Life At The Champions', 'Call To The Sea', 'Becoming The Shadows'];
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-book-div">
        <div className="book-display">
          <h1 key={key}> </h1>
          <p className="category">{category}</p>
          <h2>{title}</h2>
          <p className="authorName">{author}</p>
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
          <div className="complete">
            <h4>
              {Math.floor(Math.random() * 100)}
              %
            </h4>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="chapter">
          <p>CURRENT CHAPTER</p>
          <p>
            Chapter&nbsp;
            {Math.floor(Math.random() * 15)}
            &nbsp;:&nbsp;
            {chapters[Math.ceil(Math.random() * 6)]}
          </p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

export default BookDisplay;
