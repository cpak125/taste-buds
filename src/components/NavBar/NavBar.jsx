import { Link } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <div id='app-logo'></div>
      {user ?
        <div id='links'>
          <Link to="/recipes/search">Search Recipes</Link>
          & nbsp; | &nbsp;
          <Link to="/recipes/saved">My Recipes</Link>
          &nbsp;|&nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;|&nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
        :
        <div id='links'>
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