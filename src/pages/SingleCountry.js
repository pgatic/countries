import { useParams, Link } from "react-router-dom";

const SingleCountry = () => {
  const { code } = useParams();
  return (
    <main id="details">
      <h2>Single country {code}</h2>
    </main>
  );
};

export default SingleCountry;
