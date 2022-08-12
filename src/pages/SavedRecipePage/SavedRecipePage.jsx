import { useEffect } from 'react';
import * as recipesAPI from '../../utilities/recipes-api';
import NavBar from "../../components/NavBar/NavBar";
import SavedList from "../../components/SavedList/SavedList";

export default function SavedRecipePage({ user, setUser, setSavedRecipes, savedRecipes, handleSetSavedRecipe }) {
  useEffect(function() {
    async function getRecipes() {
      const recipes = await recipesAPI.getAll();
      setSavedRecipes(recipes);
    }
    getRecipes();
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <SavedList
        savedRecipes={savedRecipes}
        handleSetSavedRecipe={handleSetSavedRecipe}
      />
    </div>
  );
}