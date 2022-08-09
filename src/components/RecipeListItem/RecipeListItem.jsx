import { Link } from 'react-router-dom';
import './RecipeListItem.css';

export default function RecipeListItem({ key, title, image, source, sourceURL, calories, servings, ingredients }) {
  return (
    <Link to={`/recipes/search/${title}`} style={{ textDecoration: 'none', color: 'black' }}
      state={{ title, image, source, sourceURL, calories, servings, ingredients }} >
      <div className="RecipeListItem">
        <img src={image} alt="" />
        <div className="container">
          <div className='title'>{title}</div>
          <div className='divider'>
            {calories} Calories <span>{ingredients.length} Ingredients</span>
          </div>
          <div className='source'>{source}</div>
        </div>
      </div >
    </Link >

  );
};