import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils";

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  alpha3Code,
}) => {
  return (
    <article className="card">
      <Link to={`/country/${alpha3Code}`}>
        <img src={flag} alt="flag" />
        <div className="info">
          <h2>{name}</h2>
          <p>
            <span className="property">Population:</span>
            {numberWithCommas(population)}
          </p>
          <p>
            <span className="property">Region:</span>
            {region}
          </p>
          <p>
            <span className="property">Capital:</span>
            {capital}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default CountryCard;
