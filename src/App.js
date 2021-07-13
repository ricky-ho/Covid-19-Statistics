import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { GlobalSection, CountrySection } from "./components/Sections";
import { fetchData, getGlobalData, getCountriesData } from "./utils/api";

import "./App.scss";

/* 
  Features:
    Header/Nav
    - Add desktop navigation 

  - Add responsiveness
  - Check iOS compatibility
*/

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initialLoad = async () => {
      const { latest_data, all_data } = await fetchData();
      setData({ latest_data, all_data });
    };
    initialLoad();
  }, []);

  let content = data ? (
    <>
      <GlobalSection data={getGlobalData(data.all_data)} />
      <CountrySection data={getCountriesData(data.latest_data)} />
    </>
  ) : (
    <>
      <Loader />
    </>
  );

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
