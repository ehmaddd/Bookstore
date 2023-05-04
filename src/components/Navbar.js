import { Link, Route, Routes } from 'react-router-dom';
import User from '../images/user.png';
import Books from './Books';
import Categories from './Categories';
import './navbar.css';

const Navbar = () => (
  <>
    <nav>
      <Link to="/" className="nav-link" element={<Books />}>
        <h1 className="label-text">Bookstore CMS</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link" element={<Books />}>BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link" element={<Categories />}>CATEGORIES</Link>
        </li>
      </ul>
      <img src={User} alt="" className="user-avatar" />
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);

export default Navbar;
