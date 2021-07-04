/* 
  COVID ALL DATA:         https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json
  COVID ALL VACCINATIONS: https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json

  COVID LATEST DATA:      https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json

*/

export const fetchData = async () => {
  try {
    const latest_data = await fetchLatestData();
    const all_data = await fetchAllData();

    return { latest_data, all_data };
  } catch {
    console.warn("Unable to fetch data");
  }
};

export const getGlobalData = (data) => {
  return data.OWID_WRL;
};

export const getCountriesData = (data) => {
  const results = [];
  for (let obj in data) {
    if (obj.match(/\b\w*owid\w*\b/gi)) continue;
    results.push(data[obj]);
  }
  return results;
};

/* Helper Functions */

const fetchLatestData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json"
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
};

const fetchAllData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json"
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
};
