import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import InfoParagraph from "../components/InfoParagraph";
import Button from "../components/Button";
import { numberWithCommas } from "../utils";

const url = "https://restcountries.eu/rest/v2/alpha/";

const CountryDetails = ({ code }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [bordersCountries, setBordersCountries] = useState([]);

  const fetchCountry = useCallback(() => {
    fetch(`${url}${code}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const {
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = result;
          if (borders.length > 0) {
            fetch(
              `https://restcountries.eu/rest/v2/alpha?codes=${borders.join(
                ";"
              )}&fields=name`
            )
              .then((res) => res.json())
              .then(
                (result) => {
                  const bordersNames = result.map((item) => item.name);
                  setBordersCountries(bordersNames);
                },
                (error) => {
                  console.log(error);
                }
              );
          }

          setLoading(false);
          setCountry({
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          });
        },
        (error) => {
          setLoading(false);
          setError(error);
        }
      );
  }, [code]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  if (loading) {
    return <Loading />;
  }
  if (error || country.name === undefined) {
    return <Error />;
  } else {
    const {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = country;

    return (
      <article className="flex-wrap">
        <section className="flag">
          <img src={flag} alt={`${name} flag`} />
        </section>
        <section className="info-box">
          <h2>{name}</h2>
          <section className="info">
            <section className="lead">
              <InfoParagraph label="Native Name">{nativeName}</InfoParagraph>
              <InfoParagraph label="Population">
                {numberWithCommas(population)}
              </InfoParagraph>
              <InfoParagraph label="Region">{region}</InfoParagraph>
              <InfoParagraph label="Sub Region">{subregion}</InfoParagraph>
              <InfoParagraph label="Capital">{capital}</InfoParagraph>
            </section>
            <section className="sub">
              <InfoParagraph label="Top Level Domain">
                {topLevelDomain}
              </InfoParagraph>
              <InfoParagraph label="Currencies">
                {currencies.length > 1
                  ? currencies.map((currency) => currency.name).join(", ")
                  : currencies[0].name}
              </InfoParagraph>
              <InfoParagraph label="Languages">
                {languages.map((lang) => lang.name).join(", ")}
              </InfoParagraph>
            </section>
          </section>
          <section className="border-countries">
            <p className="property">Border Countries:</p>
            <div className="borders">
              {borders.map((border, i) => (
                <Link to={`/country/${border}`} key={border}>
                  <Button>{bordersCountries[i]}</Button>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </article>
    );
  }
};

export default CountryDetails;
