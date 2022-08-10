import SavedListItem from '../SavedListItem/SavedListItem';
import './SavedList.css';

export default function SavedList({ recipes }) {
  const recipeList = recipes.map((r) =>
    <SavedListItem
      key={r._id}
      recipe={r}
    />
  );

  return (
    <div className="SavedList">
      {recipeList}
    </div>
  );
}