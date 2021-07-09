import { formatNumber, formatDate } from "../../../utils/format";

import "./globalsection.scss";

const GlobalSummary = ({ data }) => {
  return (
    <div className="global-summary">
      <h3>
        Information as of: <span>{formatDate(data.date)}</span>
      </h3>
      <div className="summary__card">
        <p>
          <span className="text-red">{formatNumber(data.total_cases)}</span>
          confirmed cases
        </p>
      </div>
      <div className="summary__card">
        <p>
          <span className="text-red">{formatNumber(data.total_deaths)}</span>{" "}
          confirmed deaths
        </p>
      </div>
      <div className="summary__card">
        <p>
          <span className="text-green">
            {formatNumber(data.total_vaccinations)}
          </span>
          vaccine doses administered globally
        </p>
      </div>
      <div className="summary__card">
        <p>
          <span className="text-green">
            {formatNumber(data.new_vaccinations)}
          </span>
          vaccine doses administered today
        </p>
      </div>
      <div className="summary__card">
        <p>
          <span className="text-blue">{`${data.people_fully_vaccinated_per_hundred}%`}</span>
          of the population fully vaccinated
        </p>
      </div>
      <div className="summary__card">
        <p>
          <span className="text-blue">{`${data.people_vaccinated_per_hundred}%`}</span>
          of the population received at least 1 vaccine dose
        </p>
      </div>
    </div>
  );
};

export default GlobalSummary;
