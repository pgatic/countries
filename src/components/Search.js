import { BsSearch } from "react-icons/bs";

const Search = ({ handleInputChange }) => {
  return (
    <div className="input-box">
      <input
        type="search"
        placeholder="Search for a country"
        onChange={handleInputChange}
      />
      <BsSearch className="search-icon" />
    </div>
  );
};

export default Search;
