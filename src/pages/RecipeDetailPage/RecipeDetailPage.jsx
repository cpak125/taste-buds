import { Link, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import './RecipeDetailPage.css';

export default function RecipeDetailPage({ user, setUser }) {
  const location = useLocation();
  const { title, image, source, sourceURL, calories, servings, ingredients } = location.state;
  const ingredientsList = ingredients.map((ing, i) => <li key={i}>{ing}</li>);
  return (
    <div>
      <NavBar user={user} setUser={setUser} />

      <main className="RecipeDetailPage">
        <div className="title">{title}</div>
        <div className="source">See full recipe on: <a href={sourceURL} target="_blank">{source}</a></div>
        <div className="stats">
          <div>
            <div>{ingredients.length}</div>
            <div>Ingredients</div>
          </div>
          <div className="servings">
            <div>{servings}</div>
            <div>Servings</div>
          </div>
          <div>
            <div>{calories}</div>
            <div>Calories</div>
          </div>
        </div>
        <img src={image} alt="" className="image" />
        <button className="save-btn">+ Save</button>
        <div className="row-border"></div>
        <div className="ingredients">
          <h3>{ingredients.length} Ingredients</h3>
          <ul className="list">
            {ingredientsList}
          </ul>
        </div>
        <div className="directions">
          <button className="directions-btn">
            <a className="link" href={sourceURL} target="_blank"> Directions</a>
          </button>
          <span>on {source}</span>
        </div>
      </main >

    </div >
  );
}