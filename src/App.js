import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import axios from "axios";
import "./App.css";
import FilterPanel from "./components/FilterPanel/FilterPanel";

function App() {
  const [data, setData] = useState();
  const [filters, setFilters] = useState();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios("https://tiesibsargs.turn.lv/wp-json/ties-api/v1/resources").then(
      (res) => {
        setData(res.data);
        setFilteredData(res.data);
      }
    );
    axios(
      "https://tiesibsargs.turn.lv/wp-json/ties-api/v1/resources/filters"
    ).then((res) => {
      setFilters(res.data);
    });
  }, []);

  return (
    <div className="app" key="l">
      <FilterPanel
        data={data}
        filters={filters}
        setFilteredData={setFilteredData}
      />
      <Card data={filteredData} />
    </div>
  );
}

export default App;
