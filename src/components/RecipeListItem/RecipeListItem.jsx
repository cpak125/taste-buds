import { Link } from 'react-router-dom';
import './RecipeListItem.css';

export default function RecipeListItem({ key, title, image, source, sourceURL, calories, servings, ingredients }) {
  return (
    <Link to={`/recipes/search/${title}`} style={{ textDecoration: 'none', color: 'black' }}
      state={{ title, image, source, sourceURL, calories, servings, ingredients }} >
      <div className="RecipeListItem">
        <img src={image} alt="" />
        <div className="container">
          <h3>{title}</h3>
          <div className='divider'>
            {calories}  |  {ingredients.length} Ingredients
          </div><br />
          <div>{source}</div>
        </div>
      </div >
    </Link >

  );
};