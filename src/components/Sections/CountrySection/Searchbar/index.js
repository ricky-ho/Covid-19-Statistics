import { BiSearchAlt2 } from "react-icons/bi";

import "./searchbar.scss";

const Searchbar = ({ query, handleChange }) => {
  return (
    <form
      className="search-form"
      action=""
      onSubmit={(e) => e.preventDefault()}
      autoComplete="off"
    >
      <div>
        <BiSearchAlt2 className="bi-search" size={25} />
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={"Search for country..."}
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Searchbar;
