import NavBar from "../../components/NavBar/NavBar";
import './RecipeDetailPage.css';

export default function RecipeDetailPage({ user, setUser, detailedRecipe, handleSave, activeSearch, error }) {
  const recipeData = {
    title: detailedRecipe.r.recipe.label,
    image: detailedRecipe.r.recipe.image,
    source: detailedRecipe.r.recipe.source,
    sourceURL: detailedRecipe.r.recipe.url,
    calories: (detailedRecipe.r.recipe.calories / detailedRecipe.r.recipe.yield).toFixed(),
    servings: detailedRecipe.r.recipe.yield,
    ingredients: detailedRecipe.r.recipe.ingredientLines,
  };

  const ingredientsList = recipeData.ingredients.map((ing, i) => <li key={i}>{ing}</li>);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main className="RecipeDetailPage">
        <div className="title">{recipeData.title}</div>
        <div className="source">See full recipe on: <a href={recipeData.sourceURL} target="_blank" rel="noreferrer">{recipeData.source}</a></div>
        <div className="stats">
          <div>
            <div className="bold">{recipeData.ingredients.length}</div>
            <div>Ingredients</div>
          </div>
          <div className="servings">
            <div className="bold">{recipeData.servings}</div>
            <div>Servings</div>
          </div>
          <div>
            <div className="bold">{recipeData.calories}</div>
            <div>Calories</div>
          </div>
        </div>
        <img src={recipeData.image} alt="" className="image" />
        {activeSearch ?
          <div className="save">
            <button className="btn orange" onClick={() => handleSave(recipeData)}>+ Save</button>
            <p className="error-message">{error}</p>
          </div>
          :
          <button className="btn red">Delete</button>
        }

        <div className="row-border"></div>
        <div className="ingredients">
          <h3>{recipeData.ingredients.length} Ingredients</h3>
          <ul className="list">
            {ingredientsList}
          </ul>
        </div>
        <div className="directions">
          <button className="directions-btn">
            <a className="link" href={recipeData.sourceURL} target="_blank" rel="noreferrer"> Directions</a>
          </button>
          <span>at {recipeData.source}</span>
        </div>
      </main >

    </div >
  );
}