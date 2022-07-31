import { Link } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import * as userService from '../../utilities/users-service';
import Logo from '../Logo/Logo';
import './NavBar.css';
import home from '../../img/home.png';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <Logo />

      {user ?
        <div id='links'>
          <button>
            <Link to="/" className='link'>Home</Link>
          </button>
          <button>
            <Link to="/recipes/search">Search Recipes</Link>
          </button>
          <button>
            <Link to="/recipes/saved">My Recipes</Link>
          </button>
          <span>Welcome, {user.name}</span>
          <button>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </button>
        </div>
        :
        <div id='links'>
          <button>
            <Link to="/" className='link'>Home</Link>
          </button>
          <button>
            <Link to="/login" className='link'>Log In</Link>
          </button>
          <button>
            <Link to="/signup" className='link'>Sign Up</Link>
          </button>
        </div>
      }
    </nav>
  );
}