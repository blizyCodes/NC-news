export const SortBy = ({ setSortBy }) => {
  return (
    <div className="dropdown-sortBy-order">
      <label>Sort By:</label>
      <select
        id="sortBy"
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};
