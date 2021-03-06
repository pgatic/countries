import { BiMoon, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <Link to="/">
        <h3>Where in the world</h3>
      </Link>
      <button onClick={toggleTheme} className="theme-switch">
        {theme === "dark-theme" ? (
          <>
            <BiSun />
            <span> Light Mode</span>
          </>
        ) : (
          <>
            <BiMoon />
            <span> Dark Mode</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Navbar;
