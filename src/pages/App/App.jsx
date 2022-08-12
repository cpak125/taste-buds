import { useState, useEffect } from 'react';
import * as recipesAPI from '../../utilities/recipes-api';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SearchRecipePage from '../SearchRecipePage/SearchRecipePage';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';
import SavedRecipePage from '../SavedRecipePage/SavedRecipePage';
import SavedRecipeDetailPage from '../SavedRecipeDetailPage/SavedRecipeDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState(JSON.parse(localStorage.getItem('detailedRecipe')) ?
    JSON.parse(localStorage.getItem('detailedRecipe'))
    :
    {}
  );

  // const [savedDetailedRecipe, setSavedDetailedRecipe] = useState({});
  const [savedDetailedRecipe, setSavedDetailedRecipe] = useState(localStorage.getItem('savedDetailedRecipe') ?
    localStorage.getItem('savedDetailedRecipe')
    :
    {}
  );

  useEffect(() => {
    localStorage.setItem('detailedRecipe', JSON.stringify(detailedRecipe));
  }, [detailedRecipe]);

  useEffect(() => {
    localStorage.setItem('savedDetailedRecipe', savedDetailedRecipe);
  }, [savedDetailedRecipe]);

  function handleSetRecipe(r) {
    // const recipeData = { r };
    // setDetailedRecipe(recipeData);
    setDetailedRecipe((detailedRecipe) => ({ ...detailedRecipe, r }));
  }

  function handleSetSavedRecipe(r) {
    const recipeData = r;
    setSavedDetailedRecipe(recipeData);
    // setSavedDetailedRecipe((savedDetailedRecipe) => ({ ...savedDetailedRecipe, r }));
  }

  async function handleSave(recipeData) {
    try {
      const recipe = await recipesAPI.add(recipeData);
      alert('Recipe saved');
      setSavedRecipes([...savedRecipes, recipe]);
    } catch {
      alert('Recipe has already been saved');
    }
  }

  return (
    <main className="App">
      {user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/recipes/search'
              element={
                <SearchRecipePage
                  user={user}
                  setUser={setUser}
                  handleSetRecipe={handleSetRecipe}
                />}
            />
            <Route path='/recipes/search/:title'
              element={
                <RecipeDetailPage
                  user={user}
                  setUser={setUser}
                  handleSave={handleSave}
                  detailedRecipe={detailedRecipe}
                />}
            />
            <Route path='/recipes/saved'
              element={
                <SavedRecipePage
                  user={user}
                  setUser={setUser}
                  savedRecipes={savedRecipes}
                  setSavedRecipes={setSavedRecipes}
                  handleSetSavedRecipe={handleSetSavedRecipe}
                />}
            />
            <Route path='/recipes/saved/:title'
              element={
                <SavedRecipeDetailPage
                  user={user}
                  setUser={setUser}
                  savedDetailedRecipe={savedDetailedRecipe}
                />}
            />

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

