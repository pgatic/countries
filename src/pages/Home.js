import React, { useState, useEffect } from "react";
import Search from "../components/Search.js";
import Filter from "../components/Filter.js";
import CountriesList from "../components/CountriesList.js";

const urlAll = "https://restcountries.eu/rest/v2/all";
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
          const results = result.map((item) => {
            const {
              name,
              flag,
              population,
              region,
              capital,
              alpha3Code,
            } = item;
            return {
              name,
              flag,
              population,
              region,
              capital,
              alpha3Code,
            };
          });
          setLoading(false);
          setCountries(results);
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
      fetchCountries(`${urlSearch}${searchTerm}`);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (selected) {
      fetchCountries(`${urlFilter}${selected}`);
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
