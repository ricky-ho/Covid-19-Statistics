import { convertToLocaleString } from "../../../utils/format";

import "./countrysection.scss";

const CountrySection = ({ data }) => {
  return (
    <section id="countries">
      <h2>Countries</h2>
      <div className="countries__inner">
        {data.map((country, index) => (
          <Country key={index} data={country} />
        ))}
      </div>
    </section>
  );
};

const Country = ({ data }) => {
  const filtered_data = {
    date: data.last_updated_date,
    total_cases: convertToLocaleString(data.total_cases),
    new_cases: convertToLocaleString(data.new_cases),
    total_deaths: convertToLocaleString(data.total_deaths),
    new_deaths: convertToLocaleString(data.new_deaths),
    total_vaccinations: convertToLocaleString(data.total_vaccinations),
    people_vaccinated: convertToLocaleString(data.people_vaccinated),
    people_fully_vaccinated: convertToLocaleString(
      data.people_fully_vaccinated
    ),
  };

  return (
    <a
      href={`#countries`}
      className="country-card"
      data-country={data.location}
    >
      <h3>{data.location}</h3>
      <table>
        <tbody>
          <tr>
            <th>Total cases:</th>
            <td>{filtered_data.total_cases}</td>
          </tr>
          <tr>
            <th>Total deaths:</th>
            <td>{filtered_data.total_deaths}</td>
          </tr>
          <tr>
            <th>Total vaccines administered:</th>
            <td>{filtered_data.total_vaccinations}</td>
          </tr>
          <tr>
            <th>People vaccinated:</th>
            <td>{filtered_data.people_vaccinated}</td>
          </tr>
          <tr>
            <th>People fully vaccinated:</th>
            <td>{filtered_data.people_fully_vaccinated}</td>
          </tr>
        </tbody>
      </table>
      <p>{`Information as of: ${filtered_data.date}`}</p>
    </a>
  );
};

export default CountrySection;
