import RecipeListItem from "../RecipeListItem/RecipeListItem";
import './RecipeList.css';

export default function RecipeList({ recipes, detailedRecipe, setDetailedRecipe, activeSearch }) {
  const recipeList = recipes.map((r, i) => {
    return (
      <RecipeListItem
        key={i}
        r={r}
        detailedRecipe={detailedRecipe}
        setDetailedRecipe={setDetailedRecipe}
        activeSearch={activeSearch}
      />
    );
  }
  );
  return (
    <div className="RecipeList">
      {recipeList}
    </div>
  );
}