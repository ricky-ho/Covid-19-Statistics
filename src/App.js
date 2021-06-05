import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import { fetchData, getGlobalData, getCountriesData } from "./utils/data";
import { GlobalSection, CountrySection } from "./components/Sections";
import "./App.scss";

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

  return (
    <div className="App">
      <Layout>{content}</Layout>
    </div>
  );
};

export default App;
