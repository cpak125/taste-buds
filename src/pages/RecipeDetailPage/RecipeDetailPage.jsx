import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import './RecipeDetailPage.css';

export default function RecipeDetailPage({ user, setUser }) {
  const location = useLocation();
  const { title, image, source, sourceURL, calories, servings, ingredients, activeSearch } = location.state;
  const ingredientsList = ingredients.map((ing, i) => <li key={i}>{ing}</li>);
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main className="RecipeDetailPage">
        <div className="title">{title}</div>
        <div className="source">See full recipe on: <a href={sourceURL} target="_blank" rel="noreferrer">{source}</a></div>
        <div className="stats">
          <div>
            <div className="bold">{ingredients.length}</div>
            <div>Ingredients</div>
          </div>
          <div className="servings">
            <div className="bold">{servings}</div>
            <div>Servings</div>
          </div>
          <div>
            <div className="bold">{calories}</div>
            <div>Calories</div>
          </div>
        </div>
        <img src={image} alt="" className="image" />
        {activeSearch ?
          <button className="btn orange">+ Save</button>
          :
          <button className="btn red">Delete</button>
        }

        <div className="row-border"></div>
        <div className="ingredients">
          <h3>{ingredients.length} Ingredients</h3>
          <ul className="list">
            {ingredientsList}
          </ul>
        </div>
        <div className="directions">
          <button className="directions-btn">
            <a className="link" href={sourceURL} target="_blank" rel="noreferrer"> Directions</a>
          </button>
          <span>at {source}</span>
        </div>
      </main >

    </div >
  );
}