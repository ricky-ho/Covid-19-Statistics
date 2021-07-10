import { useState, useEffect } from "react";
import { formatNumber } from "../../../utils/format";
import Searchbar from "../../Searchbar";
import Filter from "../../Filter";

import "./countrysection.scss";

const CountrySection = ({ data }) => {
  const [countryData, setCountryData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(false);
  const [sortValue, setSortValue] = useState("total_cases");

  useEffect(() => {
    const filterDataByQuery = (country) => {
      if (searchQuery === "") return country;

      let reg = new RegExp(searchQuery, "gi");
      return reg.test(country.location);
    };

    setCountryData(data.filter(filterDataByQuery));
  }, [searchQuery, data]);

  const customSort = (a, b) => {
    let aValue = a[sortValue];
    let bValue = b[sortValue];

    if (sortValue === "location") {
      return sortAscending
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return sortAscending ? aValue - bValue : bValue - aValue;
  };

  const toggleAscending = () => setSortAscending(!sortAscending);

  return (
    <section id="countries">
      <h2>Statistics by Country</h2>
      <div className="country-table__controls">
        <Filter
          ascending={sortAscending}
          sortValue={sortValue}
          toggleAscending={toggleAscending}
          handleChange={setSortValue}
        />
        <Searchbar query={searchQuery} handleChange={setSearchQuery} />
      </div>
      <div role="table" className="country-table">
        {countryData.length ? (
          countryData.sort(customSort).map((country, index) => {
            return <Country key={index} data={country} />;
          })
        ) : (
          <div className="no-results">No results found!</div>
        )}
      </div>
    </section>
  );
};

const Country = ({ data }) => {
  const filtered_data = {
    date: data.last_updated_date,
    population: formatNumber(data.population),
    total_cases: formatNumber(data.total_cases),
    total_deaths: formatNumber(data.total_deaths),
    people_vaccinated: formatNumber(data.people_vaccinated),
    people_fully_vaccinated: formatNumber(data.people_fully_vaccinated),
    people_fully_vaccinated_per_hundred:
      data.people_fully_vaccinated_per_hundred,
  };

  return (
    <>
      <div data-country={data.location} className="country-card">
        <h4>{data.location}</h4>
        <div className="card__inner">
          <table>
            <tbody>
              <tr>
                <th>Population</th>
                <td>{filtered_data.population || "-"}</td>
              </tr>
              <tr>
                <th>Cases</th>
                <td>{filtered_data.total_cases}</td>
              </tr>
              <tr>
                <th>Deaths</th>
                <td>{filtered_data.total_deaths}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>People Vaccinated</th>
                <td>{filtered_data.people_vaccinated}</td>
              </tr>
              <tr>
                <th>People Fully Vaccinated</th>
                <td>{filtered_data.people_fully_vaccinated}</td>
              </tr>
              <tr>
                <th>% Fully Vaccinated</th>
                <td>
                  {filtered_data.people_fully_vaccinated_per_hundred
                    ? `${filtered_data.people_fully_vaccinated_per_hundred}%`
                    : "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CountrySection;
