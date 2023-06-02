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
        <Card data={filteredData} translations={translations} />
      </div>
    );
  };

  return resources.isLoading || filters.isLoading ? (
    <div className="cc-loader">
      <p>{translations.loading}</p>
      <svg viewBox="-25 -25 100 100" preserveAspectRatio>
        <defs>
          <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
            <stop stop-color="rgba(255,255,255,.2)" offset="10%" />
            <stop stop-color="rgba(255,255,255,.7)" offset="90%" />
          </linearGradient>
        </defs>
        <circle class="cls-1" cx="26" cy="27" r="26" stroke="url(#gr-simple)" />
        <path
          class="cls-2"
          d="M25,0A24.92,24.92,0,0,1,42.68,7.32"
          transform="translate(1 2)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            from="0 26 27"
            to="360 26 27"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  ) : resources.isError || filters.isError ? (
    <div className="cc-filter-empty">{translations.fetchError}</div>
  ) : (
    <PageLoaded resourcesData={resources.data} filterData={filters.data} />
  );
}

export default App;
