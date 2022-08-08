import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import * as edamamService from '../../utilities/edamam-service';


export default function SearchRecipePage({ user, setUser }) {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(function() {
    async function getRecipes() {
      const recipes = await edamamService.getRecipes(query);
      setRecipes(recipes);
    }
    getRecipes();
  }, [query]);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <h1>SearchRecipePage</h1>
      <SearchForm
        search={search}
        setSearch={setSearch}
        setQuery={setQuery}
      />
    </div>
  );
}