import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UserLogOut from '../UserLogOut/UserLogOut';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  return (
    <nav className='NavBar'>
      <Logo />
      {user ?
        <div id='links'>
          <button>
            <Link to="/recipes/search" className='link'>Search Recipes</Link>
          </button>
          <button>
            <Link to="/recipes/saved" className='link'>My Recipes</Link>
          </button>
          <UserLogOut user={user} setUser={setUser} />
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