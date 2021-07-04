import Graph from "../../Graph";
import { convertToLocaleString } from "../../../utils/format";

import "./globalsection.scss";

const GlobalSection = ({ data }) => {
  const timeline = data.data;
  const latest = timeline[timeline.length - 2];

  const cases = [
    {
      description: "total cases",
      data: convertToLocaleString(latest.total_cases),
    },
    {
      description: "new cases",
      data: convertToLocaleString(latest.new_cases),
    },
  ];

  const deaths = [
    {
      description: "total deaths",
      data: convertToLocaleString(latest.total_deaths),
    },
    {
      description: "new deaths",
      data: convertToLocaleString(latest.new_deaths),
    },
  ];

  const vaccinations = [
    {
      description: "vaccines administered",
      data: convertToLocaleString(latest.total_vaccinations),
    },
    {
      description: "people received at least 1 vaccine dose",
      data: convertToLocaleString(latest.people_vaccinated),
    },
    {
      description: "people fully vaccinated",
      data: convertToLocaleString(latest.people_fully_vaccinated),
    },
  ];

  return (
    <section id="global">
      <h2>Global Statistics</h2>

      <Graph
        title="Cases"
        theme="rgb(90, 90, 90)"
        options={[
          { label: "Cumulative", value: "total_cases" },
          { label: "Daily", value: "new_cases" },
        ]}
        data={timeline}
        latest={cases}
      />
      <Graph
        title="Deaths"
        theme="rgb(192, 26, 8)"
        options={[
          { label: "Cumulative", value: "total_deaths" },
          { label: "Daily", value: "new_deaths" },
        ]}
        data={timeline}
        latest={deaths}
      />
      <Graph
        title="Vaccinations"
        theme="rgb(0, 90, 0)"
        options={[
          { label: "Vaccines administered", value: "total_vaccinations" },
          { label: "People vaccinated", value: "people_vaccinated" },
          {
            label: "People fully vaccinated",
            value: "people_fully_vaccinated",
          },
        ]}
        data={timeline.filter((item) => item.total_vaccinations >= 0)}
        latest={vaccinations}
      />
    </section>
  );
};

export default GlobalSection;
