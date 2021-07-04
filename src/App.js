import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalSection, CountrySection } from "./components/Sections";
import { fetchData, getGlobalData, getCountriesData } from "./utils/api";

import "./App.scss";

/* 
  Features:
    Overall
    - Add config.js file to remove hardcoding graphs/data
    - Add a loading icon on page load

    Header: 
    - Add box-shadow effect after scrolling down

    Global
    - Finish the graphs for the global statistics
    - Format the dates on the graph/tooltip
    - Add hover effect on active bar

    Countries
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
      <div className="container">
        <Header />
        <main>{content}</main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
