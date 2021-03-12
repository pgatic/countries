import React, { useState, useEffect } from "react";
import Search from "../components/Search.js";
import Filter from "../components/Filter.js";
import CountriesList from "../components/CountriesList.js";

const fieldsString = "?fields=name;flag;population;region;capital;alpha3Code";
const urlAll =
  "https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital;alpha3Code";
const urlSearch = `https://restcountries.eu/rest/v2/name/`;
const urlFilter = "https://restcountries.eu/rest/v2/region/";

const Home = () => {
  const [selected, setSelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (option) => {
    setSelected(option.label);
  };

  const fetchCountries = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(false);
          setCountries(result);
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  };

  useEffect(() => {
    if (!searchTerm) {
      fetchCountries(urlAll);
    } else {
      fetchCountries(`${urlSearch}${searchTerm}${fieldsString}`);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (selected) {
      fetchCountries(`${urlFilter}${selected}${fieldsString}`);
    }
  }, [selected]);

  return (
    <main id="home">
      <section className="input-container">
        <div className="form-control">
          <Search handleInputChange={handleInputChange} />
        </div>
        <div className="form-control">
          <Filter handleSelectChange={handleSelectChange} />
        </div>
      </section>
      <section className="countries">
        <CountriesList countries={countries} loading={loading} error={error} />
      </section>
    </main>
  );
};

export default Home;
