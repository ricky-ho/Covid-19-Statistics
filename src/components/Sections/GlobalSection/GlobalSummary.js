import { formatNumber, formatDate } from "../../../utils/format";

import "./globalsection.scss";

const GlobalSummary = ({ data }) => {
  return (
    <div className="global-summary">
      <p>
        As of <span className="stat-black">{formatDate(data.date)}</span>, there
        have been a total of{" "}
        <span className="stat-red">{`${formatNumber(
          data.total_cases
        )} confirmed cases`}</span>{" "}
        and{" "}
        <span className="stat-red">{`${formatNumber(
          data.total_deaths
        )} confirmed deaths`}</span>
        .
      </p>
      <p>
        <span className="stat-green">{`${formatNumber(
          data.total_vaccinations
        )} vaccines`}</span>{" "}
        have been administered globally with{" "}
        <span className="stat-green">{`${formatNumber(
          data.new_vaccinations
        )} vaccines`}</span>{" "}
        administered today.
      </p>
      <p>
        <span className="stat-blue">
          {data.people_fully_vaccinated_per_hundred}%
        </span>{" "}
        of the population has been fully vaccinated and{" "}
        <span className="stat-blue">{data.people_vaccinated_per_hundred}%</span>{" "}
        has received at least one vaccine dose.
      </p>
    </div>
  );
};

export default GlobalSummary;
