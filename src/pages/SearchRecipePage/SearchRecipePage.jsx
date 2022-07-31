import NavBar from "../../components/NavBar/NavBar";

export default function SearchRecipePage({ user, setUser }) {
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <h1>SearchRecipePage</h1>
    </div>
  );
}