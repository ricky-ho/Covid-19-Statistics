import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import { fetchData, getGlobalData, getCountriesData } from "./utils/data";
import { GlobalSection, CountrySection } from "./components/Sections";
import "./App.scss";

/* 
  Features:
    Overall
    - Add config.js file to remove hardcoding graphs/data

    Global
    - Finish the graphs for the global statistics
    - Format the dates on the graph/tooltip
    - Add hover effect on active bar

    Countries
    - Add search feature to country table
    - Add accordion graph to country table on click

  - Add responsiveness
  - Check iOS compatibility
  
*/

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const initialLoad = async () => {
      const { latest_data, all_data } = await fetchData();
      setData({ latest_data, all_data });
    };
    initialLoad();
  }, []);

  var content = data ? (
    <>
      <GlobalSection data={getGlobalData(data.all_data)} />
      <CountrySection data={getCountriesData(data.latest_data)} />
    </>
  ) : null;
  // Add a loading component

  return (
    <div className="App">
      <Layout>{content}</Layout>
    </div>
  );
};

export default App;
