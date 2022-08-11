import NavBar from "../../components/NavBar/NavBar";
import SavedList from "../../components/SavedList/SavedList";

export default function SavedRecipePage({ user, setUser, savedRecipes }) {


  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <SavedList savedRecipes={savedRecipes} />
    </div>
  );
}