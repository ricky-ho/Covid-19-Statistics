import { HiSortAscending, HiSortDescending } from "react-icons/hi";

import "./filter.scss";

const Filter = ({ ascending, toggleAscending, handleChange }) => {
  return (
    <div className="filter-container">
      {ascending ? (
        <HiSortAscending
          className="hi-sort"
          size={20}
          onClick={() => toggleAscending()}
        />
      ) : (
        <HiSortDescending
          className="hi-sort"
          size={20}
          onClick={() => toggleAscending()}
        />
      )}
      <select
        className="filter-select"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="location">Alphabetical</option>
        <option value="population">Population</option>
        <option value="total_cases">Cases</option>
        <option value="total_deaths">Deaths</option>
        <option value="people_vaccinated">People Vaccinated</option>
        <option value="people_fully_vaccinated">People Fully Vaccinated</option>
        <option value="people_fully_vaccinated_per_hundred">
          % Fully Vaccinated
        </option>
      </select>
    </div>
  );
};
export default Filter;
