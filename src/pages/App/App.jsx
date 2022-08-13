import { useState, useEffect } from 'react';
import * as recipesAPI from '../../utilities/recipes-api';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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

  const [savedDetailedRecipe, setSavedDetailedRecipe] = useState(JSON.parse(localStorage.getItem('savedDetailedRecipe')) ?
    JSON.parse(localStorage.getItem('savedDetailedRecipe'))
    :
    {}
  );

  useEffect(() => {
    localStorage.setItem('detailedRecipe', JSON.stringify(detailedRecipe));
  }, [detailedRecipe]);

  useEffect(() => {
    localStorage.setItem('savedDetailedRecipe', JSON.stringify(savedDetailedRecipe));
  }, [savedDetailedRecipe]);

  function handleSetRecipe(r) {
    // const recipeData = { r };
    // setDetailedRecipe(recipeData);
    setDetailedRecipe((detailedRecipe) => ({ ...detailedRecipe, r }));
  }

  function handleSetSavedRecipe(r) {
    setSavedDetailedRecipe(r);
    // setSavedDetailedRecipe((savedDetailedRecipe) => ({ ...savedDetailedRecipe, r }));
  }

  async function handleSave(recipeData) {
    try {
      const recipe = await recipesAPI.add(recipeData);
      setSavedRecipes([...savedRecipes, recipe]);
    } catch {
      alert('Recipe has already been saved');
    }
  }

  function deleteRecipe(title) {
    window.confirm("Are you sure you want to delete this recipe");
    recipesAPI.deleteRecipe(title);
  }

  async function hasBeenSaved(title) {
    const isSaved = await recipesAPI.getOne(title);
    return isSaved;
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
                  hasBeenSaved={hasBeenSaved}
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
                  deleteRecipe={deleteRecipe}
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

