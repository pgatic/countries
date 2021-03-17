import Loading from "../components/Loading.js";
import Error from "../components/Error.js";
import CountryCard from "../components/CountryCard.js";

const CountriesList = ({ countries, loading, error }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (countries.length < 1) {
    return <h2>No country matched your search criteria!</h2>;
  }
  return countries.map((country, i) => <CountryCard key={i} {...country} />);
};

export default CountriesList;
