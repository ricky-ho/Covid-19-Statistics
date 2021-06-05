import { convertToLocaleString } from "../../../utils/format";

const CountrySection = ({ data }) => {
  return (
    <section id="countries">
      <h2>Countries</h2>
      {data.map((country, index) => (
        <Country key={index} data={country} />
      ))}
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
    <div>
      <h3>{data.location}</h3>
      <p>{`Latest update: ${filtered_data.date}`}</p>
      <p>{`Total cases: ${filtered_data.total_cases}`}</p>
      <p>{`New cases: ${filtered_data.new_cases}`}</p>
      <p>{`Total deaths: ${filtered_data.total_deaths} `}</p>
      <p>{`New deaths: ${filtered_data.new_deaths} `}</p>
      <p>{`Total vaccinations: ${filtered_data.total_vaccinations}`}</p>
      <p>{`People vaccinated: ${filtered_data.people_vaccinated}`}</p>
      <p>{`People fully vaccinated: ${filtered_data.people_fully_vaccinated}`}</p>
    </div>
  );
};

export default CountrySection;
