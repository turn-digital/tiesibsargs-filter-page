import { useState } from "react";
import { useQuery } from "react-query";
import Card from "./components/Card/Card";
import axios from "axios";
import "./assets/scss/style.scss";
import FilterPanel from "./components/FilterPanel/FilterPanel";

function App({ translations }) {
  const resources = useQuery("resources", () =>
    axios
      .get("https://tiesibsargs.turn.lv/wp-json/ties-api/v1/resources")
      .then((res) => res.data)
  );

  const filters = useQuery("filters", () =>
    axios
      .get("https://tiesibsargs.turn.lv/wp-json/ties-api/v1/resources/filters")
      .then((res) => res.data)
  );

  const PageLoaded = ({ resourcesData, filterData }) => {
    const [filteredData, setFilteredData] = useState(resourcesData);
    return (
      <div className="cc-resources">
        <FilterPanel
          data={resourcesData}
          filters={filterData}
          setFilteredData={setFilteredData}
          translations={translations}
        />
        <Card data={filteredData} />
      </div>
    );
  };

  return resources.isLoading || filters.isLoading ? (
    <div>{translations.loading}</div>
  ) : resources.isError || filters.isError ? (
    <div>{translations.fetchError}</div>
  ) : (
    <PageLoaded resourcesData={resources.data} filterData={filters.data} />
  );
}

export default App;
