import { useParams, useHistory } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CountryDetails from "../components/CountryDetails";

const SingleCountry = () => {
  const { code } = useParams();
  const history = useHistory();

  return (
    <main id="details">
      <button className="back" onClick={() => history.goBack()}>
        <MdKeyboardBackspace className="back-arrow" />
        Back
      </button>
      <CountryDetails code={code} />
    </main>
  );
};

export default SingleCountry;
