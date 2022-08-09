import RecipeListItem from "../RecipeListItem/RecipeListItem";
import './RecipeList.css';

export default function RecipeList({ recipes }) {
  const recipeList = recipes.map((r, i) => {
    return (
      <RecipeListItem
        key={i}
        title={r.recipe.label}
        image={r.recipe.image}
        source={r.recipe.source}
        sourceURL={r.recipe.url}
        calories={(r.recipe.calories / r.recipe.yield).toFixed()}
        servings={r.recipe.yield}
        ingredients={r.recipe.ingredientLines}
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