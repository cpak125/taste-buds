import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export default function RecipeDetailPage({ user, setUser }) {
  const location = useLocation();
  const { title, image, source, sourceURL, calories, servings, ingredients } = location.state;
  const ingredientsList = ingredients.map((ing, i) => { return (<div key={i}>•{ing}</div>); });
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <h1>Detail</h1>
      <h2>{title}</h2>
      <img src={image} alt="" />
      <h2>{calories}</h2>
      <h3>Ingredients</h3>

      {ingredientsList}

    </div>
  );
}