import { Link } from 'react-router-dom';
import './SavedListItem.css';

export default function SavedListItem({ recipe }) {

  const { title, image, source, sourceURL, calories, servings, ingredients } = recipe;

  return (
    <Link to={`/recipes/saved/${recipe.title}`} style={{ textDecoration: 'none', color: 'black' }}
      state={{ title, image, source, sourceURL, calories, servings, ingredients, activeSearch: false }} >
      <div className="SavedListItem">
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
}