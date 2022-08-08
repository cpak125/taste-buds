
export default function SearchForm({ search, setSearch, setQuery }) {

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    setQuery(search);
  }

  return (
    <div>
      <div className='SearchForm'>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="query" value={search} onChange={handleChange} required />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </div>
    </div>
  );
}