import { useState } from "react";
import { convertToLocaleString } from "../../utils/format";
import GraphControl from "./GraphControl";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

import "./graphs.scss";

const Graph = ({ title, theme, options, data, latest }) => {
  const [graphData, setGraphData] = useState(options[0].value);

  const handleDataChange = (e) => setGraphData(e.target.value);

  return (
    <div data-graph={title} className="graph-container">
      <div className="latest-info">
        {latest.map((obj, index) => (
          <p key={index}>
            <span>{obj.data}</span> {obj.description}
          </p>
        ))}
      </div>
      <GraphControl options={options} handleDataChange={handleDataChange}>
        <ResponsiveContainer width={"100%"} height={250}>
          <BarChart data={data} margin={{ top: 30, bottom: 30, left: 10 }}>
            <XAxis
              dataKey="date"
              interval="preserveStart"
              tick={{ fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              orientation="right"
              tickFormatter={(tick) =>
                tick >= 10 ** 7
                  ? `${tick / 1000000}M`
                  : convertToLocaleString(tick)
              }
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Bar
              dataKey={graphData}
              name={graphData}
              onMouseOver={(e) => {}}
              fill={theme}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </GraphControl>
    </div>
  );
};

export default Graph;
