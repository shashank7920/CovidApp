import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { fetchCountries } from "../../api";
import "./some.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <div style={{ marginBottom: "40px" }}>
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Country"
        size="lg"
      >
        <Dropdown.Item style={{ height: "400px", overflowY: "scroll" }}>
          {countries.map((country, i) => (
            <Dropdown.Item
              key={i}
              value={country}
              onClick={(e) => handleCountryChange(country)}
            >
              {country}
            </Dropdown.Item>
          ))}
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Countries;
