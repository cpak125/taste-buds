import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SavedList from "../../components/SavedList/SavedList";
import * as recipesAPI from '../../utilities/recipes-api';

export default function SavedRecipePage({ user, setUser }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(function() {
    async function getRecipes() {
      const recipes = await recipesAPI.getAll();
      setRecipes(recipes);
    }
    getRecipes();
  }, []);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <SavedList recipes={recipes} />
    </div>
  );
}