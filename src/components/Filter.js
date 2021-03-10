// import { BiCaretDown } from "react-icons/bi";
import React from "react";
import Dropdown from "react-dropdown";

const Filter = ({ handleSelectChange }) => {
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Dropdown
      options={options}
      onChange={handleSelectChange}
      placeholder="Filter by Region"
    />
  );
};

export default Filter;
