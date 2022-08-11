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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [detailedRecipe, setDetailedRecipe] = useState(JSON.parse(localStorage.getItem('detailedRecipe')) ? JSON.parse(localStorage.getItem('detailedRecipe')) : {});

  useEffect(function() {
    async function getRecipes() {
      const recipes = await recipesAPI.getAll();
      setSavedRecipes(recipes);
    }
    getRecipes();
  }, []);

  useEffect(() => {
    localStorage.setItem('detailedRecipe', JSON.stringify(detailedRecipe));
  }, [detailedRecipe]);

  async function handleSave(recipeData) {
    const recipe = await recipesAPI.add(recipeData);
    setSavedRecipes([...savedRecipes, recipe]);
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
                  detailedRecipe={detailedRecipe}
                  setDetailedRecipe={setDetailedRecipe} />} />
            <Route path='/recipes/search/:title'
              element={
                <RecipeDetailPage
                  user={user}
                  setUser={setUser}
                  activeSearch={true}
                  handleSave={handleSave}
                  detailedRecipe={detailedRecipe}
                  setDetailedRecipe={setDetailedRecipe} />} />
            <Route path='/recipes/saved'
              element={
                <SavedRecipePage
                  user={user}
                  setUser={setUser}
                  savedRecipes={savedRecipes} />} />
            <Route path='/recipes/saved/:title'
              element={
                <RecipeDetailPage
                  user={user}
                  setUser={setUser}
                  activeSearch={false} />} />

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

