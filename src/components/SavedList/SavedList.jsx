import SavedListItem from '../SavedListItem/SavedListItem';
import './SavedList.css';

export default function SavedList({ savedRecipes }) {
  const savedList = savedRecipes.map((r) =>
    <SavedListItem
      key={r._id}
      recipe={r}
    />
  );

  return (
    <div className="SavedList">
      {savedList}
    </div>
  );
}