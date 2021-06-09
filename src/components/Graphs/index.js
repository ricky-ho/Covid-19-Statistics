import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
} from "recharts";

const Graph = ({ type, data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={500}>
        <LineChart
          data={data}
          margin={{ top: 25, bottom: 25, left: 0, right: 25 }}
        >
          <CartesianGrid strokeDasharray="4 2" vertical={false} />
          <XAxis dataKey="date" interval={60} />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="total_cases_per_million"
            name="Total cases per million"
            stroke="#000"
            strokeDasharray="0"
            dot={false}
            isAnimationActive={false}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
