export const Order = ({ setOrder }) => {
  return (
    <div className="dropdown-sortBy-order">
      <label>Order:</label>
      <select
        id="sortBy"
        onChange={(event) => {
          setOrder(event.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};
