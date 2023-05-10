import React from "react";
import "./FilterPanel.css";

import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import Select from "react-select";

const FilterPanel = ({ data, filters, setFilteredData }) => {
  const [theme, setTheme] = useState({ parent: null, id: null });
  const [searchQuery, setSearchQuery] = useState();
  const [checkboxTags, setCheckboxTags] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const applyFilters = (query, selectedThemeId, selectedCheckboxValues) => {
    let filteredArray = [...data];

    // Apply search filter
    if (query) {
      filteredArray = filteredArray.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    // Apply theme filter
    if (selectedThemeId.parent) {
      // Getting parent obj from filters
      const parent = filters.themes.find(
        (filter) => filter.id === selectedThemeId.id
      );

      console.log(parent);
      // Getting all childs ids from parent obj
      const childIds = parent.children.map((child) => child.id);

      console.log(childIds);

      filteredArray = filteredArray.filter((item) =>
        item.linkedThemes.some((theme) => childIds.includes(parseInt(theme.id)))
      );
    } else if (selectedThemeId.id) {
      filteredArray = filteredArray.filter((obj) =>
        obj.linkedThemes.some(
          (theme) => parseInt(theme.id) === parseInt(selectedThemeId.id)
        )
      );
    }

    // Apply checkbox filter
    if (selectedCheckboxValues.length > 0) {
      filteredArray = filteredArray.filter((item) => {
        return selectedCheckboxValues.includes(item.categoryID);
      });
    }

    // Apply date filter
    if (startDate && !endDate) {
      const dateStart = new Date(startDate);
      filteredArray = filteredArray.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= dateStart;
      });
    } else if (!startDate && endDate) {
      const dateEnd = new Date(endDate);
      filteredArray = filteredArray.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate <= dateEnd;
      });
    } else if (startDate && endDate) {
      const dateStart = new Date(startDate);
      const dateEnd = new Date(endDate);
      filteredArray = filteredArray.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= dateStart && itemDate <= dateEnd;
      });
    }
    return filteredArray;
  };

  const filterBySearch = (event) => {
    setSearchQuery(event.target.value);
    const query = event.target.value;
    const filteredArray = applyFilters(query, theme, checkboxTags);
    setFilteredData(filteredArray);
  };

  const themeHandler = (themeId) => {
    const filteredArray = applyFilters(searchQuery, themeId, checkboxTags);
    setFilteredData(filteredArray);
  };

  const checkboxHandler = (event) => {
    const value = parseInt(event.target.value);
    const newCheckedTags = event.target.checked
      ? [...checkboxTags, value]
      : checkboxTags.filter((tag) => tag !== value);

    setCheckboxTags(newCheckedTags);

    if (newCheckedTags.length === 0) {
      setFilteredData(applyFilters(searchQuery, theme, []));
    } else {
      const filteredArray = applyFilters(searchQuery, theme, newCheckedTags);
      setFilteredData(filteredArray);
    }
  };

  const filterDataByDateHandler = () => {
    const filteredArray = applyFilters(searchQuery, theme, checkboxTags);
    setFilteredData(filteredArray);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="filtersWrapper">
        <Select options={options} />
        <h1>Meklēt</h1>
        <input
          type="search"
          className="searchFilter"
          placeholder="Meklēt pēc atslēgvārda"
          onChange={filterBySearch}
        ></input>
        {filters?.themes.map((theme) => {
          return (
            <ul key={theme.id} role="menu" className="themeFilter">
              <li
                role="menuitem"
                style={{ minWidth: "200px" }}
                onClick={() => {
                  setTheme({ parent: true, id: theme.id });
                  themeHandler({ parent: true, id: theme.id });
                }}
                value={theme.id}
                id={theme.id}
                key={theme.id}
              >
                {theme.title}
              </li>
              {theme?.children?.length > 0 &&
                theme.children.map((child) => {
                  return (
                    <ul key={child.id} role="menu" className="themeFilter">
                      <li
                        onClick={() => {
                          setTheme({ parent: false, id: child.id });
                          themeHandler({ parent: false, id: child.id });
                        }}
                        value={child.id}
                        id={child.id}
                        key={child.id}
                      >
                        {child.title}
                      </li>
                    </ul>
                  );
                })}
            </ul>
          );
        })}

        {filters?.categories.map((category) => {
          return (
            <div key={category.id}>
              <label htmlFor={category.id} key={category.id}>
                <input
                  type="checkbox"
                  onChange={checkboxHandler}
                  value={category.id}
                  id={category.id}
                  key={category.id}
                />
                <span>{category.category_name}</span>
              </label>
            </div>
          );
        })}
        <div className="dateSection">
          <Flatpickr
            className="dateInput"
            onChange={(date, str, config) => {
              setStartDate(config.input.value);
            }}
          />
          <p style={{ marginTop: "20px", fontSize: "40px" }}>-</p>
          <Flatpickr
            className="dateInput"
            onChange={(date, str, config) => {
              setEndDate(config.input.value);
            }}
          />
          <button
            type="submit"
            className="searchDateButton"
            aria-label="button for search"
            value="Skatīt ziņas pa periodiem"
            onClick={() => {
              filterDataByDateHandler();
            }}
          >
            <svg
              width="14"
              heigth="14"
              version="1.1"
              viewBox="0 0 700 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m624.88 530.12-204.02-204c29.996-35.688 46.422-80.301 46.422-127.48 0-53.059-20.66-102.95-58.184-140.46-37.52-37.512-87.406-58.172-140.46-58.172-53.059 0-102.95 20.66-140.45 58.184-77.441 77.453-77.441 203.46 0 280.92 37.508 37.52 87.395 58.184 140.45 58.184 47.168 0 91.793-16.414 127.48-46.422l204 204zm-471.95-215.77c-63.793-63.805-63.793-167.62 0-231.42 30.906-30.902 71.996-47.926 115.71-47.926 43.715 0 84.805 17.023 115.71 47.926 30.906 30.906 47.926 71.996 47.926 115.71 0 43.715-17.023 84.805-47.926 115.71-30.906 30.906-72.008 47.926-115.71 47.926s-84.805-17.012-115.71-47.926z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
