import Navbar from './Navbar';
import './books.css';
import Circle from '../images/semicircle.png'

const bookArr = [
 {
  name: 'The Hunger Game',
  author: 'Suzanne Collins',
  status: 64,
  chapter: 'Chapter 17'
 },
 {
  name: 'Dune',
  author: 'Frank Herbert',
  status: 8,
  chapter: 'Chapter 3: A Lesson Learned'
 },
 {
  name: 'Capital in the Twenty-First Century',
  author: 'Suzanne Collins',
  status: 0,
  chapter: 'Introduction'
 },
];

const bookDisplay = () => {
  return bookArr.map((book) => {
    return <div className='main-book-div'>
      <div className='book-display'>
        <h2>{book.name}</h2>
        <p>{book.author}</p>
        <ul class='book-task'>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
      <div class='status'><img src={Circle} alt=''></img><p><h4>{book.status}%</h4><p class='completed'>Completed</p></p></div>
      <div class='divider'></div>
      <div class='chapter'><p>CURRENT CHAPTER</p><p>{book.chapter}</p><button>UPDATE PROGRESS</button></div>
    </div>
  })
}

const addBook = () => {
  return (
    <div class='add-book'>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type='text' placeholder='Book Title' /><input type='text' placeholder='Author' /><button>ADD BOOK</button>
      </form>
    </div>
  );
}

const Books = () => (
    <div>
      <Navbar />
      <div className='books-div'>
          {bookDisplay()}
          <hr />
          {addBook()}
      </div>
    </div>
);

export default Books;
