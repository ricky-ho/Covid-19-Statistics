import { convertToLocaleString } from "../../../utils/format";

import "./globalsection.scss";

const GlobalSection = ({ data }) => {
  const timeline = data.data;
  const latest = timeline[timeline.length - 2];

  const filtered_data = {
    date: latest.date,
    total_cases: convertToLocaleString(latest.total_cases),
    new_cases: convertToLocaleString(latest.new_cases),
    total_deaths: convertToLocaleString(latest.total_deaths),
    new_deaths: convertToLocaleString(latest.new_deaths),
    total_vaccinations: convertToLocaleString(latest.total_vaccinations),
    people_vaccinated: convertToLocaleString(latest.people_vaccinated),
    people_fully_vaccinated: convertToLocaleString(
      latest.people_fully_vaccinated
    ),
  };

  return (
    <section id="global">
      <h2>Global Statistics</h2>
      <div className="graph"></div>
      <table>
        <tbody>
          <tr>
            <th>{`Total cases: `}</th>
            <td>{filtered_data.total_cases}</td>
          </tr>
          <tr>
            <th>{`New cases: `}</th>
            <td>{filtered_data.new_cases}</td>
          </tr>
          <tr>
            <th>{`Total deaths: `}</th>
            <td>{filtered_data.total_deaths}</td>
          </tr>
          <tr>
            <th>{`New deaths: `}</th>
            <td>{filtered_data.new_deaths}</td>
          </tr>
          <tr>
            <th>{`Total vaccines administered: `}</th>
            <td>{filtered_data.total_vaccinations}</td>
          </tr>
          <tr>
            <th>{`People vaccinated: `}</th>
            <td>{filtered_data.people_vaccinated}</td>
          </tr>
          <tr>
            <th>{`People fully vaccinated: `}</th>
            <td>{filtered_data.people_fully_vaccinated}</td>
          </tr>
        </tbody>
      </table>
      <p>{`Last updated: ${filtered_data.date}`}</p>
    </section>
  );
};

export default GlobalSection;
