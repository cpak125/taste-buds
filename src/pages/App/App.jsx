import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SearchRecipePage from '../SearchRecipePage/SearchRecipePage';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';
import SavedRecipePage from '../SavedRecipePage/SavedRecipePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/recipes/search' element={<SearchRecipePage user={user} setUser={setUser} />} />
            <Route path='/recipes/search/:title' element={<RecipeDetailPage user={user} setUser={setUser} />} />
            <Route path='/recipes/saved' element={<SavedRecipePage user={user} setUser={setUser} />} />
            <Route path='/recipes/saved/:title' element={<RecipeDetailPage user={user} setUser={setUser} />} />
            {/* redirect to /recipes/search if path in address bar hasn't matched a <Route> above */}
            <Route path='/*' element={<Navigate to="/recipes/search" />} />
          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginForm setUser={setUser} />} />
            <Route path='/signup' element={<SignUpForm setUser={setUser} />} />
            <Route path='/*' element={<Navigate to="/" />} />
          </Routes>
        </>
        // <AuthPage setUser={setUser} />
      }
    </main>
  );
}

